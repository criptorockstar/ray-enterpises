import { useTranslations } from "next-intl";
import Slides from "./slides";

export default function Testimonials() {
  const t = useTranslations("HomePage");

  const items = [
    {
      avatar : t("testimonials.t1.avatar"),
      comment: t("testimonials.t1.comment"),
      name: t("testimonials.t1.name")
    },
    {
      avatar : t("testimonials.t2.avatar"),
      comment: t("testimonials.t2.comment"),
      name: t("testimonials.t2.name")
    },
    {
      avatar : t("testimonials.t3.avatar"),
      comment: t("testimonials.t3.comment"),
      name: t("testimonials.t3.name")
    },
    {
      avatar : t("testimonials.t4.avatar"),
      comment: t("testimonials.t4.comment"),
      name: t("testimonials.t4.name")
    },
    {
      avatar : t("testimonials.t5.avatar"),
      comment: t("testimonials.t5.comment"),
      name: t("testimonials.t5.name")
    },
    {
      avatar : t("testimonials.t6.avatar"),
      comment: t("testimonials.t6.comment"),
      name: t("testimonials.t6.name")
    }
  ]

  return (
    <>
      <Slides items={items} />
    </>
  );
}
