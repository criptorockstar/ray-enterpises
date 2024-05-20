import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "es", "pt", "zh", "ru", "fr"] as const;
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",

  // If locales use different paths, you can
  // specify each external path per locale.
  "/about": {
    en: "/about",
    es: "/nosotros",
    pt: "/sobre",
    zh: "/women",
    ru: "/o",
    fr: "/apropos",
  },
  "/services": {
    en: "/services",
    es: "/servicios",
    pt: "/servicos",
    zh: "/fuwu",
    ru: "/uslugi",
    fr: "/service",
  },
  "/work-with-us": {
    en: "/work-with-us",
    es: "/trabaja-con-nosotros",
    pt: "/trabalhe-conosco",
    zh: "/gen-women-gongzuo",
    ru: "/rabotat-s-nami",
    fr: "/travaille-avec-nous",
  },
  "/contact": {
    en: "/contact",
    es: "/contacto",
    pt: "/contato",
    zh: "/jiechu",
    ru: "/kontakt",
    fr: "/contact",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
