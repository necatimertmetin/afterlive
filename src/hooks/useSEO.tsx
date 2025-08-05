// hooks/useSEO.ts
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: Record<string, unknown>;
}

export const useSEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
  structuredData,
}: SEOProps): void => {
  useEffect(() => {
    // Title güncelle
    if (title) {
      document.title = title;
    }

    // Meta tagları güncelleme fonksiyonu
    const updateMeta = (
      selector: string,
      content: string,
      attribute: "name" | "property" = "name"
    ): void => {
      const attributeKey = attribute === "property" ? "property" : "name";
      const attributeValue = selector.includes("property=")
        ? selector.match(/property="(.+?)"/)?.[1]
        : selector.match(/name="(.+?)"/)?.[1];

      if (!attributeValue) return;

      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute(attributeKey, attributeValue);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Meta description
    if (description) {
      updateMeta('meta[name="description"]', description);
    }

    // Open Graph tags
    if (ogTitle) {
      updateMeta('meta[property="og:title"]', ogTitle, "property");
    }
    if (ogDescription) {
      updateMeta('meta[property="og:description"]', ogDescription, "property");
    }
    if (ogImage) {
      updateMeta('meta[property="og:image"]', ogImage, "property");
    }

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.href = canonical;
      } else {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        canonicalLink.href = canonical;
        document.head.appendChild(canonicalLink);
      }
    }

    if (structuredData) {
      const scriptId = "structured-data-json-ld";
      let scriptTag = document.getElementById(
        scriptId
      ) as HTMLScriptElement | null;

      const jsonLd = JSON.stringify(structuredData);

      if (scriptTag) {
        scriptTag.textContent = jsonLd;
      } else {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        scriptTag.textContent = jsonLd;
        document.head.appendChild(scriptTag);
      }
    }
  }, [
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
    canonical,
    structuredData,
  ]);
};
