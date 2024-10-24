"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useTransition } from "react";
import config from "../../../richtpl.config";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
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
    <DropdownMenu>
    <DropdownMenuTrigger
      aria-label={t("Select a language")}
      className={`w-full max-w-[130px] focus:hidden`}
      asChild
    >
      <Button
        variant="outline"
        className="focus:hidden flex justify-start items-center"
      >
        <Globe className="w-5 h-5 mr-2" />
        <span>
          {config.i18n.localeConfigs[lang || config.i18n.defaultLocale].label}
        </span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {config.i18n.locales.map((lang, idx) => (
        <DropdownMenuItem
          key={idx}
          onClick={() =>
            onChange(config.i18n.localeConfigs[lang].path)
          }
        >
          {config.i18n.localeConfigs[lang].label}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
  );
}

export default LanguageSelest;
