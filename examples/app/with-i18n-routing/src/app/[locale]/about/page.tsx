import { getLocale, getTranslations } from "next-intl/server";
import PageClientAbout from "./page-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "" });

  return {
    title: t("About"),
  };
}

export default function About() {
  return <PageClientAbout />;
}
