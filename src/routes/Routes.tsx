import type { JSX } from "react";
import { Contact } from "../pages/contact/Contact";
import { PrivacyPolicy } from "../pages/privacy/PrivacyPolicy";
import { Home } from "../pages/home/Home";
import { Live } from "../pages/live/Live";

export type AppRoute = {
  path: string;
  element: JSX.Element;
  labelKey?: string;
  showInMenu?: boolean;
  showInFooter?: boolean;
};

export const ROUTES: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
    labelKey: "home",
    showInMenu: true,
    showInFooter: true,
  },

  {
    path: "/live",
    element: <Live />,
    labelKey: "live",
    showInMenu: true,
    showInFooter: true,
  },
  {
    path: "/about",
    element: <Live />,
    labelKey: "events",
    showInMenu: true,
    showInFooter: true,
  },

  {
    path: "/about",
    element: <Live />,
    labelKey: "blog",
    showInMenu: true,
    showInFooter: true,
  },

  {
    path: "/contact",
    element: <Contact />,
    labelKey: "contact",
    showInMenu: true,
    showInFooter: true,
  },

  { path: "/privacy", element: <PrivacyPolicy /> },
];
