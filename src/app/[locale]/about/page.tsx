import { Metadata } from "next";
import PageClientAbout from "./page-client";
import { getLocale, getTranslations } from "next-intl/server";

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
