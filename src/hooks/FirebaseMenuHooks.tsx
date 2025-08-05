import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import type { JSX } from "react";
import { db } from "../firebase/firebase";

// Firebase'den gelecek veri tipleri
export interface FirebaseCategory {
  key: string;
  name: string;
  image: string;
  order: number;
}

export interface FirebaseMenuItem {
  key: string;
  name: string;
  category: string;
  price: number;
  allergens: AllergenKey[];
  hasExtras?: boolean;
  order: number;
  image: string;
}

export interface FirebaseExtra {
  key: string;
  name: string;
  parentItem: string;
  price: number;
  allergens: AllergenKey[];
  order: number;
  image: string;
}

export interface FirebaseAllergen {
  key: AllergenKey;
  name: string;
  color: string;
  icon: string;
}

// Mevcut interface'ler (değişiklik yok)
export type AllergenKey =
  | "egg"
  | "milk"
  | "fish"
  | "crustacean"
  | "peanut"
  | "tree_nut"
  | "soy"
  | "gluten"
  | "sesame"
  | "lactose";

export interface Allergen {
  title: string;
  color: string;
  icon: JSX.Element;
}

export interface MenuItem {
  key: string;
  price: number;
  allergens: AllergenKey[];
  image: string;
  extras?: MenuItem[];
}

export interface MenuCategory {
  key: string;
  image: string;
  items: MenuItem[];
  order: number;
}

// Firebase verilerini uygulamada kullanılacak formata dönüştüren fonksiyon
export function convertFirebaseDataToMenuData(
  categories: Record<string, FirebaseCategory>,
  menuItems: Record<string, FirebaseMenuItem>,
  extras: Record<string, FirebaseExtra>
): MenuCategory[] {
  return Object.values(categories).map((category) => {
    const categoryItems = Object.values(menuItems).filter(
      (item) => item.category === category.key
    );

    const itemsWithExtras: MenuItem[] = categoryItems.map((item) => {
      const itemExtras = Object.values(extras)
        .filter((extra) => extra.parentItem === item.key)
        .map((extra) => ({
          key: extra.key,
          price: extra.price,
          image: extra.image,
          allergens: extra.allergens,
        }));

      return {
        key: item.key,
        price: item.price,
        allergens: item.allergens,
        image: item.image,
        extras: itemExtras.length > 0 ? itemExtras : undefined,
      };
    });

    return {
      key: category.key,
      image: category.image,
      order: category.order,
      items: itemsWithExtras,
    };
  });
}

// Firebase'den veri çekme fonksiyonu (sıralama eklendi)
export async function fetchMenuDataFromFirebase(): Promise<{
  menuData: MenuCategory[];
  allergenData: Record<AllergenKey, Allergen>;
}> {
  try {
    const categoriesSnapshot = await getDocs(
      query(collection(db, "categories"), orderBy("order"))
    );
    const menuItemsSnapshot = await getDocs(
      query(collection(db, "menu_items"))
    );
    const extrasSnapshot = await getDocs(query(collection(db, "extras")));
    const allergensSnapshot = await getDocs(collection(db, "allergens"));

    const categories: Record<string, FirebaseCategory> = {};
    categoriesSnapshot.forEach((doc) => {
      categories[doc.id] = doc.data() as FirebaseCategory;
    });

    const menuItems: Record<string, FirebaseMenuItem> = {};
    menuItemsSnapshot.forEach((doc) => {
      menuItems[doc.id] = doc.data() as FirebaseMenuItem;
    });

    const extras: Record<string, FirebaseExtra> = {};
    extrasSnapshot.forEach((doc) => {
      extras[doc.id] = doc.data() as FirebaseExtra;
    });

    const allergens: Record<string, FirebaseAllergen> = {};
    allergensSnapshot.forEach((doc) => {
      allergens[doc.id] = doc.data() as FirebaseAllergen;
    });

    const menuData = convertFirebaseDataToMenuData(
      categories,
      menuItems,
      extras
    );
    const allergenData = convertFirebaseAllergensToAllergens(allergens);

    return { menuData, allergenData };
  } catch (error) {
    console.error("Firebase veri çekme hatası:", error);
    throw error;
  }
}

// Alerjen dönüştürücü fonksiyon
export function convertFirebaseAllergensToAllergens(
  firebaseAllergens: Record<string, FirebaseAllergen>
): Record<AllergenKey, Allergen> {
  const result: Record<AllergenKey, Allergen> = {} as Record<
    AllergenKey,
    Allergen
  >;

  Object.values(firebaseAllergens).forEach((allergen) => {
    result[allergen.key] = {
      title: allergen.name,
      color: allergen.color,
      icon: <span>{allergen.icon}</span>,
    };
  });

  return result;
}

// Custom hook
export function useMenuData() {
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [allergens, setAllergens] = useState<Record<AllergenKey, Allergen>>(
    {} as Record<AllergenKey, Allergen>
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMenuDataFromFirebase()
      .then(({ menuData, allergenData }) => {
        setMenuData(menuData);
        setAllergens(allergenData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { menuData, allergens, loading, error };
}
