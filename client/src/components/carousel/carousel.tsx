"use client";
import React, { useState, useEffect } from "react";
import styles from "./carousel.module.scss";
import bg1 from "@assets/images/bg1.jpg";
import bg2 from "@assets/images/bg2.jpg";
import bg3 from "@assets/images/bg3.jpg";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <>
      <section className={styles.slider}>
        <div className={styles.list}>
          <div
            className={`${styles.item} ${activeSlide === 0 && styles.active}`}
            style={{
              backgroundImage: `url(${bg1.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              width: "100%",
              height: "558px",
              zIndex: activeSlide === 0 ? 1 : 0,
            }}
          >
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
          </div>

          <div
            className={`${styles.item} ${activeSlide === 1 && styles.active}`}
            style={{
              backgroundImage: `url(${bg2.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              width: "100%",
              height: "558px",
              zIndex: activeSlide === 1 ? 1 : 0,
            }}
          >
            <Grid container spacing={0} className={styles.content}>
              <Grid item xs={12}>
                <div className={styles.carouselContent}>
                  <h3>
                    NUESTRO PRINCIPAL OBJETIVO ES SATISFACER CONTINUAMENTE
                    NUESTROS <span>CLIENTES</span>
                  </h3>
                  <p>
                    “El objetivo del marketing es conocer y entender al cliente
                    tan bien que el producto o servicio se adapte a él y se
                    venda solo”.{" "}
                  </p>
                  <Button variant="contained">Más información</Button>
                </div>
              </Grid>
            </Grid>
          </div>

          <div
            className={`${styles.item} ${activeSlide === 2 && styles.active}`}
            style={{
              backgroundImage: `url(${bg3.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center 70%",
              width: "100%",
              height: "558px",
              zIndex: activeSlide === 2 ? 1 : 0,
            }}
          >
            <Grid container spacing={0} className={styles.content}>
              <Grid item xs={12}>
                <div className={styles.carouselContent}>
                  <h3>
                    El diseño accesible es un buen diseño. <br></br>Solo con
                    <span> Ray Enterprises</span>
                  </h3>
                  <p>
                    “El marketing es contarle al mundo que eres una estrella de
                    rock. El marketing de contenidos es mostrarle al mundo que
                    realmente lo eres”
                  </p>
                  <Button variant="contained">Más información</Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className={styles.arrows}>
          <IconButton
            aria-label="left"
            size="small"
            className={styles.prev}
            onClick={handlePrev}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            aria-label="right"
            size="small"
            className={styles.next}
            onClick={handleNext}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
      </section>
    </>
  );
}

export default CarouselComponent;
