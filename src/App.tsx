import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import { PageLayout } from "./components/layout/PageLayout";
import { ColorModeContextProvider } from "./provider/ColorModeProvider";
import { ROUTES } from "./routes/Routes";

const rtlLanguages = ["ar", "he", "fa", "ur"];

const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [rtlPlugin],
});

const cacheLtr = createCache({
  key: "mui-ltr",
});

function AppContent() {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    const lang = i18n.language.split("-")[0];
    const isRtl = rtlLanguages.includes(lang);
    setDirection(isRtl ? "rtl" : "ltr");
    document.body.dir = isRtl ? "rtl" : "ltr";
  }, [i18n.language]);

  const cache = direction === "rtl" ? cacheRtl : cacheLtr;

  return (
    <CacheProvider value={cache}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </CacheProvider>
  );
}

function App() {
  return (
    <ColorModeContextProvider>
      <I18nextProvider i18n={i18n}>
        <AppContent />
      </I18nextProvider>
    </ColorModeContextProvider>
  );
}

export default App;
