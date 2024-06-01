import { useTranslations } from "next-intl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styles from "./carousel.module.scss";

export default function Slide1() {
  const t = useTranslations("slide1")

  return (
    <Grid container spacing={0} className={styles.content}>
      <Grid item xs={12}>
        <div className={styles.carouselContent}>
          <h3>
            Ray <span>Enterprises</span>
          </h3>
          <p>
            “NACE EN JUNIO DE 2019 EN LA CIUDAD DE MARACAY EDO ARAGUA,
            VENEZUELA.”
          </p>
          <Button variant="contained">Más información</Button>
        </div>
      </Grid>
    </Grid>
  );
}
