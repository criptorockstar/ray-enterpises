import Image from "next/image";
import styles from "./home/page.module.scss";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface LocaleProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: Readonly<LocaleProps>) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: "Ray Enterprises",
    description: t("description"),
  };
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1>App</h1>
    </>
  );
}
