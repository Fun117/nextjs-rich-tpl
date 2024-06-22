import { Metadata } from "next";
import { HTMLAttributeAnchorTarget } from "react";

/**
 * Internationalization (i18n) configuration type.
 * Contains default locale, supported locales, and locale-specific configurations.
 */
type i18n = {
  defaultLocale: string;
  locales: string[];
  localeConfigs: { [locale: string]: localeConfig };
};

/**
 * Configuration for a specific locale.
 * Includes label, HTML language attribute, and path prefix.
 */
type localeConfig = {
  label: string;
  htmlLang: string;
  path: string;
};

/**
 * Header configuration type.
 * Defines title, logo, and navigation items for the header.
 */
type Header = {
  title?: string;
  logo?: {
    type?: "Vercel&Next.js";
    content?: React.ReactNode | React.JSX.Element;
  };
  items?: {
    left?: NavItem[];
    right?: NavItem[];
    project?: {
      repository?: "block" | "hidden";
    } 
  };
};

/**
 * Footer configuration type.
 * Currently an empty object, can be extended in the future.
 */
type Footer = {};

/**
 * Theme configuration type.
 * Defines color mode settings, social card image, metadata, header, and footer.
 */
type ThemeConfig = {
  colorMode: {
    defaultMode: "light" | "dark" | "system";
    disableSwitch: boolean;
  };
  image?: string; // Social card image URL
  metadata?: Metadata; // Metadata for the site
  header?: Header; // Header configuration
  footer?: Footer; // Footer configuration
};

/**
 * Navigation item type for header and footer.
 * Defines label, URL path or external link, target, and i18n settings.
 */
type NavItem = {
  label: string;
  to?: string; // Internal URL path
  href?: string; // External URL
  target?: HTMLAttributeAnchorTarget; // Link target attribute
  i18n?: boolean; // Whether to include locale prefix in the URL
};

/**
 * Main configuration type for the site.
 * Includes basic site information, i18n settings, and theme configuration.
 */
interface Config {
  title?: string; // Site title
  description?: string; // Site description
  tagline: string; // Site tagline
  favicon?: string; // URL to the favicon

  url: string; // Production URL of the site
  baseUrl?: string; // Base URL pathname

  organizationName: string; // GitHub organization/user name
  projectName: string; // GitHub repository name

  i18n: i18n; // Internationalization settings

  themeConfig: ThemeConfig; // Theme and layout configuration
}

export default Config;
