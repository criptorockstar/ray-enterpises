import NavbarComponent from "@/components/navbar/navbar";
import styles from "@assets/styles/page.module.scss";
import Slideshow from "@components/slideshow/slideshow";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Container, Grid, Button } from "@mui/material";
import Image from "next/image";
import { 
  mission,
  digital,
  referal,
  leads,
  design,
  development,
  consultant,
  importations,
  exchange
} from "@constants/images";
import Testimonials from "@components/testimonials/testimonials";
import Footer from "@components/footer/footer";
import Contact from "@components/contact/contact";

interface LocaleProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: Readonly<LocaleProps>) {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: "Ray Enterprises",
    description: t("description"),
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  const id = useTranslations("Navigation");

  return (
    <>
      <NavbarComponent />
      <Slideshow />

      <section className={styles.about} id={id("slug.about")}>
        <Container>
          <h2>{t("about.title")}</h2>
          <p className={styles.description}>{t("about.description")}</p>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={styles.content}>
              <h3>{t("about.subtitle")}</h3>
              <p className={styles.pitch}>{t("about.pitch")}</p>
            </Grid>
            <Grid item xs={12} md={6} className={styles.content}>
              <Image
                className={styles.image}
                src={mission}
                width={457}
                height={307}
                alt="People"
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.services} id={id("slug.services")}>
        <Container>
          <h2>{t("services.title")}</h2>
          <p className={styles.description}>
            {t("services.description")}
          </p>
          <Grid container spacing={1} className={styles.content}>
            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.digital")}
                  src={digital}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.digital")}</h6>
              <p className={styles.service}></p>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.referal")}
                  src={referal}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.referal")}</h6>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.leads")}
                  src={leads}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.leads")}</h6>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.design")}
                  src={design}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.design")}</h6>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.development")}
                  src={development}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.development")}</h6>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.consultant")}
                  src={consultant}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.consultant")}</h6>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.exchange")}
                  src={exchange}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.exchange")}</h6>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className={styles.icon}>
                <Image
                  alt={t("services.importations")}
                  src={importations}
                  width={100}
                  height={100}
                />
              </div>
              <h6>{t("services.importations")}</h6>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.audiovisual}>
        <Container>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <video className={styles.video} controls>
                <source src="https://onlinetestcase.com/wp-content/uploads/2023/06/2MB.mp4" type="video/mp4" />
              </video>
            </Grid>
            <Grid item md={6}>
              <p className={styles.description}>
                {t("vision.description")}
              </p>
              <div className={styles.center}>
                <Button variant="contained">{t("vision.more")}</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      
      <section>
        <Container>
          <Testimonials />
        </Container>
      </section>

      <section>
        <Container>
          <Contact />
        </Container>
      </section>

      <Footer />
    </>
  );
}
