import Image from "next/image";
import styles from "./home/page.module.scss";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import CarouselComponent from "@components/carousel/carousel";
import { Container, Grid, Button } from "@mui/material";
import mission from "@assets/images/mission.jpg";
import digital from "@assets/images/digital.png";
import referal from "@assets/images/referal.png";
import leads from "@assets/images/leads.png";
import design from "@assets/images/design.png";
import development from "@assets/images/development.png";
import consultant from "@assets/images/consultant.png";
import importations from "@assets/images/importation.png";
import exchange from "@assets/images/exchange.png";

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
  const id = useTranslations("Navigation");

  return (
    <>
      <CarouselComponent />

      <section className={styles.about} id={id("slug.about")}>
        <Container>
          <h2>Ray Entreprises</h2>
          <p className={styles.description}>
            NACE EN DICIEMBRE DE 2019 EN LA CIUDAD DE MARACAY EDO ARAGUA,
            VENEZUELA, LA EMPRESA DE TUS SUEÑOS
          </p>

          <Grid container spacing={2}>
            <Grid item xs={6} className={styles.content}>
              <h3>MISIÓN</h3>
              <p className={styles.pitch}>
                COLABORAR CON MULTIPLES EMPRESAS A NIVEL NACIONAL E
                INTERNACIONAL, PARA EL CRECIMIENTO YRECONOCIMIENTO DE LAS
                MISMAS, BAJO NUESTROS SERVICIOS, GENERANDO FUENTES DE EMPLEOS
                BIEN REMUNERADOS EN LA ERA DIGITAL, Y A SU VEZ APOYAR CON
                PERSONAL CAPACITADO EN TELEMARKETING PARA MICRO Y MACROEMPRESAS
                A NIVEL MUNDIAL.
              </p>
            </Grid>
            <Grid item xs={6} className={styles.content}>
              <Image
                className={styles.image}
                src={mission}
                width={457}
                height={307}
                alt="Image"
              />
            </Grid>
          </Grid>
        </Container>
      </section>


      <section className={styles.services} id={id("slug.services")}>
        <Container>
          <h2>Nuestros servicios</h2>
          <p className={styles.description}>
            Ofrecemos una amplia variedad de servicios para tu empresa
          </p>
          <Grid container spacing={1} className={styles.content}>
            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={digital}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Marketing digital</h6>
              <p className={styles.service}></p>
            </Grid>
            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={referal}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Marketing de referidos</h6>
            </Grid>
            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={leads}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Creación de leads</h6>
            </Grid>
            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={design}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Diseño gráfico</h6>
            </Grid>
            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={development}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Desarrollo de aplicaciónes</h6>
            </Grid>

            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={consultant}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Asesoramiento empresarial en ventas</h6>
            </Grid>
            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={exchange}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Casa de cambio digital</h6>
            </Grid>
            <Grid xs={3}>
              <div className={styles.icon}>
                <Image
                  alt="digital marketing"
                  src={importations}
                  width={100}
                  height={100}
                />
              </div>
              <h6>Importaciónes</h6>
            </Grid>
          </Grid>
        </Container>
      </section>


      <section className={styles.vision}>
        <Container>
          <p className={styles.description}>
            NUESTRA VISION, ES POSICIONARNOS EN EL 1º LUGAR DEL RANKING DE
            EMPRESAS ENTELEMARKETIG A NIVEL MUNDIAL, CONTRIBUYENDO A ALCANZAR
            LOS OBJETIVOS ECONOMICO A NUESTRO CAPITAL HUMANO, SIN IMPORTAR
            RELIGION, RAZA U ORIGEN.
          </p>

          <div className={styles.center}>
            <Button variant="contained">Más infomación</Button>
          </div>
        </Container>
      </section>

      <section className={styles.portfolio}></section>


      <section className={styles.contact} id={id("slug.contact")}></section>
    </>
  );
}
