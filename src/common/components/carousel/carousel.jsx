import styles from "./carousel.module.scss";
import bg1 from "../../assets/slider/bg1.jpg";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function CarouselComponent() {
  return (
    <>
      <section className={styles.mainSlider}>
        <div className={styles.owlCarousel}>
          <div
            style={{
              backgroundImage: `url(${bg1.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              width: "100%",
              height: "558px",
            }}
          >
            <Grid container spacing={0} className={styles.container}>
              <Grid item xs={12}>
                <div className={styles.carouselContent}>
                  <h3>
                    Ray <span>Enterprises</span>
                  </h3>
                  <p>
                    “NACE EN JUNIO DE 2019 EN LA CIUDAD DE MARACAY EDO ARAGUA,
                    VENEZUELA.”
                  </p>
                  <Button variant="contained">Leer más</Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarouselComponent;
