import {
  FaEgg,
  FaFish,
  FaLeaf,
  FaBottleDroplet,
  FaShrimp,
  FaCookieBite,
  FaCow,
} from "react-icons/fa6";
import { GiAlmond } from "react-icons/gi";
import { GiPeanut, GiWheat } from "react-icons/gi";

export const ALLERGENS = {
  egg: {
    title: "allergens.egg",
    color: "#ffff00",
    icon: <FaEgg fontSize="24px" color="#ffd963" />,
  },
  milk: {
    title: "allergens.milk",
    color: "#ffffff",
    icon: <FaCow fontSize="24px" color="#b0e0e6" />,
  },
  fish: {
    title: "allergens.fish",
    color: "#a0d3ff",
    icon: <FaFish fontSize="24px" color="#60b5f5" />,
  },
  crustacean: {
    title: "allergens.crustacean",
    color: "#ff9966",
    icon: <FaShrimp fontSize="24px" color="#ff7f50" />,
  },
  peanut: {
    title: "allergens.peanut",
    color: "#f4a460",
    icon: <GiPeanut fontSize="24px" color="#d2691e" />,
  },
  tree_nut: {
    title: "allergens.tree_nut",
    color: "#deb887",
    icon: <GiAlmond fontSize="24px" color="#8b4513" />,
  },
  soy: {
    title: "allergens.soy",
    color: "#c0e090",
    icon: <FaLeaf fontSize="24px" color="#8dc26f" />,
  },
  gluten: {
    title: "allergens.gluten",
    color: "#f5deb3",
    icon: <GiWheat fontSize="24px" color="#deb887" />,
  },
  sesame: {
    title: "allergens.sesame",
    color: "#fbe7a1",
    icon: <FaCookieBite fontSize="24px" color="#e2b36f" />,
  },
  lactose: {
    title: "allergens.lactose",
    color: "#fffacd",
    icon: <FaBottleDroplet fontSize="24px" color="#aad4cf" />,
  },
} as const;

export type AllergenKey = keyof typeof ALLERGENS;
