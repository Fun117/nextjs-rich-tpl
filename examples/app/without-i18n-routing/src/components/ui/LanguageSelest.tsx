"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useTransition } from "react";
import config from "../../../richtpl.config";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { Locale, setUserLocale } from "@/services/locale";

function LanguageSelest() {
  const t = useTranslations("Languages");
  const lang = useLocale();

  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
      router.refresh();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    console.log(isPending);
  }

  if (!config.i18n.selectButton) {
    return <></>;
  }

  return (
    <Select
      defaultValue={lang || config.i18n.defaultLocale}
      onValueChange={onChange}
    >
      <SelectTrigger
        aria-label={t("Select a language")}
        className="w-full max-w-[130px] focus:hidden"
      >
        <SelectValue>
          <div className="flex flex-row items-center gap-2">
            <Globe className="w-5 h-5" />
            {config.i18n.localeConfigs[lang || config.i18n.defaultLocale].label}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("Language")}</SelectLabel>
          {config.i18n.locales.map((lang, idx) => (
            <SelectItem key={idx} value={config.i18n.localeConfigs[lang].path}>
              {config.i18n.localeConfigs[lang].label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelest;
