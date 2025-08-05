import i18n from "../i18n/i18n";

interface SEOData {
  title: string;
  desc: string;
  ogTitle?: string;
  ogDesc?: string;
  ogImage?: string;
}

export const getSEOData = (pathname: string, baseUrl: string): SEOData => {
  const getRouteKey = (path: string): string => {
    switch (path) {
      case "/":
        return "home";
      case "/about":
        return "about";
      case "/contact":
        return "contact";
      case "/products":
        return "products";
      case "/menu":
        return "menu";
      default:
        return "default";
    }
  };

  const routeKey = getRouteKey(pathname);

  return {
    title: i18n.t(`seo.${routeKey}.title`),
    desc: i18n.t(`seo.${routeKey}.desc`),
    ogTitle: i18n.t(`seo.${routeKey}.ogTitle`),
    ogDesc: i18n.t(`seo.${routeKey}.ogDesc`),
    ogImage: `${baseUrl}/images/${routeKey}-og.jpg`,
  };
};
