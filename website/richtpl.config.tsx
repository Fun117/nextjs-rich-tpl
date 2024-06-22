import Config from "@/types/richtpl.config";

/**
 * Site configuration object.
 * Contains general site information, i18n settings, and theme configuration.
 */
const config: Config = {
  // Tagline for the site
  tagline: "Next.js Template",
  // URL to the favicon
  favicon: "/favicon.ico",

  // Production URL of the site
  url: "https://nextjs-rich-tpl.fun117.dev",
  // Base URL pathname (for GitHub Pages deployment)
  baseUrl: "/",

  // GitHub deployment configuration
  organizationName: "fun117", // GitHub organization/user name
  projectName: "nextjs-rich-tpl", // GitHub repository name

  // Internationalization (i18n) configuration
  i18n: {
    // Default locale for the site
    defaultLocale: "ja",
    // List of supported locales
    locales: ["ja", "en"],
    // Locale-specific configurations
    localeConfigs: {
      ja: {
        label: "日本語", // Label for the Japanese locale
        htmlLang: "ja-JP", // HTML language attribute for Japanese
        path: "ja", // Path prefix for Japanese locale
      },
      en: {
        label: "English", // Label for the English locale
        htmlLang: "en-US", // HTML language attribute for English
        path: "en", // Path prefix for English locale
      },
    },
  },

  // Theme and layout configuration
  themeConfig: {
    // Color mode settings
    colorMode: {
      defaultMode: "system", // Default color mode (light, dark, or system)
      disableSwitch: true, // Whether to disable the color mode switch
    },
    // URL to the social card image (replace with your project's image)
    image: "",
    // Metadata for the site
    metadata: {
      generator: "Next.js", // Generator of the site
      publisher: "Vercel", // Publisher of the site
    },
    // Header configuration
    header: {
      // Title for the header
      title: "Richtpl",
      // Logo configuration
      logo: {
        type: "Vercel&Next.js", // Type of logo
      },
      // Navigation items in the header
      items: {
        // Items on the left side of the header
        left: [
          {
            label: "Home", // Label for the item
            to: "/", // Internal URL path
            i18n: true, // Whether to include locale prefix in the URL
          },
          {
            label: "About", // Label for the item
            to: "/about", // Internal URL path
            i18n: true, // Whether to include locale prefix in the URL
          },
        ],
        project: {
          repository: "block",
        },
      },
    },
    // Footer configuration (currently empty, can be extended)
    footer: {},
  },
};

export default config;
