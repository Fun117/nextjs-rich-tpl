"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const modules_list = [
  {
    label: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    label: "next-intl",
    href: "https://next-intl-docs.vercel.app/",
  },
  {
    label: "next-themes",
    href: "https://github.com/pacocoursey/next-themes",
  },
  {
    label: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    label: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    label: "Autoprefixer",
    href: "https://github.com/postcss/autoprefixer",
  },
  {
    label: "Lucide Icons",
    href: "https://lucide.dev/",
  },
];

export default function PageClientAbout() {
  const t = useTranslations("PageAbout");
  
  return (
    <div className="relative flex flex-col items-center justify-between container min-h-[calc(100vh-64px)] p-2 md:p-8 lg:p-24 xl:p-36">
      <div className="w-full h-full p-5">
        <h1 className="text-3xl font-bold">{t("About This Project")}</h1>
        <p className="text-base font-medium mt-4">
          {t(
            "This project is a Next&#46;js template aimed at providing a robust starting point for building modern web applications&#46; It comes with pre-configured localization support, theme toggling, and various other features to streamline development&#46;"
          )}
        </p>

        <h2 className="text-2xl font-semibold mt-8">{t("Project Details")}</h2>
        <p className="text-base font-medium mt-4">
          {t(
            "This template is designed to help developers quickly set up a new Next&#46;js project with best practices and commonly needed features&#46; It includes:"
          )}
        </p>
        <ul className="list-disc list-inside mt-4 text-base font-medium">
          <li>{t("Localization with next-intl")}</li>
          <li>{t("Dark mode support with next-themes")}</li>
          <li>{t("Responsive design with Tailwind CSS")}</li>
          <li>{t("Optimized performance with modern web standards")}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">{t("Contributors")}</h2>
        <p className="text-base font-medium mt-4">
          {t(
            "This project wouldn't be possible without the contributions of the following individuals:"
          )}
        </p>
        <ul className="list-disc list-inside mt-4 text-base font-medium">
          <li>
            <Link
              href="https://github.com/fun117"
              className="text-blue-500 hover:underline"
            >
              Fun117
            </Link>{" "}
            - {t("Project Lead")}
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          {t("Modules & Packages Used")}
        </h2>
        <ul className="list-disc list-inside mt-4 text-base font-medium">
          {modules_list.map((module, idx) => (
            <li key={idx}>
              <Link
                href={module.href}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {module.label}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-8">{t("Acknowledgments")}</h2>
        <p className="text-base font-medium mt-4">
          {t(
            "We would like to thank the Next&#46;js community and the various open-source projects that have inspired and supported this template&#46;"
          )}
        </p>

        <h2 className="text-2xl font-semibold mt-8">{t("Contact")}</h2>
        <p className="text-base font-medium mt-4">
          {t("For any inquiries or contributions, please reach out to us via our.text_1")}{" "}
          <a
            href="https://github.com/fun117/nextjs-rich-tpl"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("For any inquiries or contributions, please reach out to us via our.text_2")}
          </a>
          {t("For any inquiries or contributions, please reach out to us via our.text_3")}
        </p>
      </div>
    </div>
  );
}
