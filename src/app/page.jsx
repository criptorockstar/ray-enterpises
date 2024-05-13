import CarouselComponent from "@components/carousel/carousel";
import TestimonialsComponent from "@components/testimonials/testimonials";
import styles from "./home.module.scss";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import feature1 from "@assets/sections/feature1.jpg";
import Button from "@mui/material/Button";
import digital from "@assets/digital.png";
import referal from "@assets/referal.png";
import leads from "@assets/leads.png";
import design from "@assets/design.png";
import development from "@assets/development.png";
import consultant from "@assets/consultant.png";
import importations from "@assets/importation.png";
import exchange from "@assets/exchange.png";

export const metadata = {
  title: "Ray Enterprises",
  description: "Descripcion",
};

export default function HomePage() {
  return (
    <>
      <CarouselComponent />

      <section className={styles.about} id="nosotros">
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
                src={feature1}
                width={457}
                height={307}
                alt="Image"
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.services} id="servicios">
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

      <section className={styles.vision} id="vision">
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

      <section className={styles.portfolio} id="portfolio"></section>

      <TestimonialsComponent />

      <section className={styles.contact} id="contacto"></section>
    </>
  );
}
