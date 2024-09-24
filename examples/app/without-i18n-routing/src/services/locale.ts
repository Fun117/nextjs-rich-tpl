"use server";

import { cookies } from "next/headers";
import config from "../../richtpl.config";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || config.i18n.defaultLocale;
}
export type Locale = (typeof config.i18n.locales)[number];
export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
