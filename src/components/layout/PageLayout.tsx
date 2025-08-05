// PageLayout.tsx (Basitleştirilmiş)
import { Box } from "@mui/material";
import { Header } from "./header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { getSEOData } from "../../data/seoData";
import { useSEO } from "../../hooks/useSEO";

const baseUrl = window.location.origin;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Golbahce Tesisleri",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dutluca Yolu 253/1",
    addressLocality: "Orhangazi̇",
    postalCode: "16800",
    addressRegion: "Bursa",
    addressCountry: "TR",
  },
  telephone: "+90 532 217 3475",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.4128488,
    longitude: 29.3686418,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "00:00",
      closes: "00:00",
      closed: true,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "08:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "08:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "08:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "00:00",
    },
  ],
  hasMenu: `${baseUrl}/menu`,
  url: window.location.href,
};

export const PageLayout: React.FC = () => {
  const location = useLocation();
  const baseUrl = window.location.origin;

  const seoData = getSEOData(location.pathname, baseUrl);

  useSEO({
    title: seoData.title,
    description: seoData.desc,
    ogTitle: seoData.ogTitle,
    ogDescription: seoData.ogDesc,
    ogImage: seoData.ogImage,
    canonical: `${baseUrl}${location.pathname}`,
    structuredData,
  });

  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
