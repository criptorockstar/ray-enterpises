import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "es", "pt", "zh", "ru", "fr"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",

  "/work-with-us": {
    en: "/work-with-us",
    es: "/trabaja-con-nosotros",
    fr: "/travaille-avec-nous",
    pt: "/trabalhe-conosco",
    ru: "/Работать-с-нами",
    zh: "/跟我們工作",
  }
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
