import CarouselComponent from "../common/components/carousel/carousel";
import Button from "@mui/material/Button";
import styles from "./home.module.scss";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import feature1 from "../common/assets/sections/feature1.jpg";

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
              />
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
        </Container>
      </section>

      <section className={styles.services} id="servicios">
        <Container>
          <Grid container spacing={1}></Grid>
        </Container>
      </section>
    </>
  );
}
