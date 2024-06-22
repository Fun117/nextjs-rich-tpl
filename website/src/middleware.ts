// website/src/middleware.ts

import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "@/components/i18n/nav";

import richtplConfig from "../richtpl.config";

let localePattern = richtplConfig.i18n.locales.join("|");
localePattern = `(${localePattern})`;
console.log(localePattern)

export default createMiddleware({
  // A list of all locales that are supported

  // Used when no locale matches
  defaultLocale: richtplConfig.i18n.defaultLocale,
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(ja|en)/:path*`],
};
