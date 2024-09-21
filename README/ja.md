<p align="center">
  <a href="https://nextjs-rich-tpl.vercel.app/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Next.js リッチテンプレート</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next/">
    <img alt="NPM version" src="https://img.shields.io/npm/v/next?style=for-the-badge&label=NPM&labelColor=black">
  </a>
  <a aria-label="License" href="https://github.com/Fun117/nextjs-rich-tpl/blob/main/LICENSE.txt">
    <img alt="License" src="https://img.shields.io/github/license/Fun117/nextjs-rich-tpl?style=for-the-badge&labelColor=000000">
  </a>
</p>

<p align="center">
  <a aria-label="README - English" href="https://github.com/Fun117/nextjs-rich-tpl/blob/main/README/en.md">
    <img alt="README - English" src="https://img.shields.io/badge/English-blue?style=for-the-badge">
  </a>
  <a aria-label="README - 日本語" href="https://github.com/Fun117/nextjs-rich-tpl/blob/main/README/ja.md">
    <img alt="README - 日本語" src="https://img.shields.io/badge/日本語-blue?style=for-the-badge">
  </a>
</p>

<div align="center">
  <img alt="Release version" src="https://img.shields.io/github/v/release/fun117/nextjs-rich-tpl?style=social">
  <img alt="Commit activity" src="https://img.shields.io/github/commit-activity/t/fun117/nextjs-rich-tpl?style=social">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/fun117/nextjs-rich-tpl?style=social">
</div>

<p align="center">
  <img alt="Desktop light image" src="https://github.com/Fun117/nextjs-rich-tpl/blob/main/public/image/upload/preview/ja-light-fullscreen.png">
  <img alt="Desktop dark image" src="https://github.com/Fun117/nextjs-rich-tpl/blob/main/public/image/upload/preview/ja-dark-fullscreen.png">
</p>

# Next.js リッチテンプレート

このプロジェクトは、Next.js を使用してモダンな Web アプリケーションを構築するための堅牢なスタートポイントを提供します。ローカリゼーションのサポートやテーマ切り替えなど、開発を効率化するために事前設定された機能を含んでいます。

## 主な機能

- **テーマ切り替え**: `next-themes` を使用して、ライトモードとダークモードの両方をサポート。
- **i18n（国際化）**: `next-intl` を使用した多言語対応。
- **サイトマップ**: SEO 向上のために自動生成されるサイトマップ。
- **レスポンシブデザイン**: Tailwind CSS を使用し、すべてのデバイスでのレスポンシブなデザインを実現。
- **最適化されたパフォーマンス**: 最新の Web 標準を活用してパフォーマンスを向上。

## はじめに

このテンプレートを使い始めるには、以下の手順に従ってください：

1. リポジトリをクローンします。
2. 依存関係をインストールします： `npm install` または `yarn install`
3. 開発サーバーを開始します： `npm run dev` または `yarn dev`

## プロジェクト概要

このテンプレートのライブプレビューを[こちら](https://nextjs-rich-tpl.vercel.app)で確認できます。

## 自分でデプロイ

テンプレートを Vercel にデプロイするか、StackBlitz でプレビューすることができます：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Fun117/nextjs-rich-tpl&project-name=nextjs-rich-tpl&repository-name=nextjs-rich-tpl)

## 使い方

プロジェクトをブートストラップするには、リポジトリをクローンします：

```bash
git clone https://github.com/fun117/nextjs-rich-tpl.git
```

クラウドにデプロイするには、[Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) を使用してください（公式 [documentation](https://nextjs.org/docs/deployment) を参照）。

# コントリビュート

ドキュメントやプロジェクト自体を改善するための貢献を歓迎します。コントリビューターは、この README で紹介されます。詳細は、[GitHub リポジトリ](https://github.com/fun117/nextjs-rich-tpl)をご確認ください。

# 謝辞

Next.js コミュニティや、このテンプレートをサポートしてくれたオープンソースプロジェクトに特別な感謝を捧げます。

# お問い合わせ

質問やコントリビュートに関しては、[こちらのサイト](https://fun117.dev/en/contacts)からご連絡ください。

---

# ドキュメント

### 1. `richtpl.tsx` 設定ガイド

1. **プロジェクトのルートに`richtpl.tsx`を配置**

プロジェクトのルートに、テンプレート設定ファイル `richtpl.tsx` を配置します。このファイルでは、サイトの国際化設定やテーマ設定を行います。

```typescript
export default {
  title: "My Project",
  tagline: "The best project ever!",
  url: "https://myproject.com",
  organizationName: "MyOrganization",
  projectName: "my-project",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeConfigs: {
      en: { label: "English", htmlLang: "en", path: "/" },
      ja: { label: "日本語", htmlLang: "ja", path: "/ja" },
    },
  },
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      selectSwitch: true,
    },
    header: {
      title: "My Project",
      logo: {
        href: "/",
        type: "Vercel&Next.js",
      },
    },
    footer: {
      title: "My Footer",
      social: {
        github: true,
        twitter: "my_twitter_handle",
      },
    },
  },
};
```

2. **i18n 設定**

- defaultLocale は、デフォルトで使用される言語を指定します。
- locales はサポートする言語の配列を指定し、localeConfigs では各言語の設定を定義します。
- path で URL パスのプレフィックスを設定します。たとえば、日本語のページは /ja にリダイレクトされます。

3. **テーマ設定**

- colorMode は、ダークモードやシステムに応じたテーマ切り替えを制御します。
- header や footer では、サイトのヘッダーとフッターのロゴやナビゲーションを設定できます。

### 2. `middleware.ts` 設定ガイド

1. **ロケール対応のミドルウェア設定**

`next-intl`を用いて国際化を実現するために、`middleware.ts`にロケール対応の設定を行います。このミドルウェアは、URL に基づいて適切な言語設定を適用します。

```typescript
import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "@/components/provider/nav";
import richtplConfig from "../richtpl.config";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  pathnames,
  defaultLocale: richtplConfig.i18n.defaultLocale,
});

export function middleware(request: NextRequest) {
  let response = intlMiddleware(request);
  if (!response) {
    response = NextResponse.next();
  }
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/", `/(ja|en)/:path*`],
};
```

2. **matcher 設定**

- matcher によって、どの URL パターンがミドルウェアの処理対象となるかを定義します。/(ja|en)/:path\* として、英語および日本語のページをカバーするように設定します。
- 他の言語が追加される場合は、matcher にも追加する必要があります。

### テーマ切り替えと i18n の実装例

```typescript
import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Header");

  return (
    <header>
      <h1>{t("title")}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "ダークモード" : "ライトモード"}
      </button>
    </header>
  );
}
```

- このコードでは、テーマを切り替えるボタンと i18n 対応のテキストを実装しています。

### FAQ

#### Q: 他の言語を追加するにはどうすればいいですか？

A: `richtpl.tsx`の`i18n`設定で、新しい言語を`locales`配列に追加し、`localeConfigs`に対応する設定を記載します。加えて、`middleware.ts`の`matcher`にも新しい言語を追加する必要があります。

#### Q: テーマ切り替えはどのようにカスタマイズできますか？

A: `themeConfig.colorMode`設定でデフォルトのテーマや切り替え可能なオプションをカスタマイズできます。また、`useTheme`フックを使用して、動的にテーマを切り替えることが可能です。
