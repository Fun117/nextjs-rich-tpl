"use client";

import { useLocale, useTranslations } from "next-intl";
import Link, { LinkProps } from "next/link";
import React, { Suspense } from "react";

export function Turl(url: string) {
  const lang = useLocale();
  return `${lang}/${url}`;
}

interface TLinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  target?: string;
  i18n?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export function TLink({
  children,
  to,
  href,
  target,
  i18n,
  onClick,
}: TLinkProps) {
  const t = useTranslations();
  const lang = useLocale();

  let hrefUrl = "";

  if (to) {
    hrefUrl = i18n ? `/${lang}/${to}` : `/${to}`;
  } else if (href) {
    hrefUrl = href;
  }

  return (
    <Link
      href={hrefUrl}
      target={target || to ? "_self" : "_blank"}
      onClick={onClick}
    >
      {i18n ? t(children) : children}
    </Link>
  );
}
