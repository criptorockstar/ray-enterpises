"use client";
import React, { useState, useEffect } from "react";
import styles from "./slides.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface SlidesProps {
  items: { 
    title: React.ReactNode, 
    description: string, 
    bg: any,
    more: string
  }[];
}

export default function Slides({ items }: SlidesProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide === items.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? items.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <section className={styles.slideshow}>
      <div className={styles.list}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${activeSlide === index ? styles.active : ""}`}
            style={{
              backgroundImage: `url(${item.bg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              width: "100%",
              height: "558px",
              zIndex: activeSlide === index ? 1 : 0,
            }}
          >
            <Grid container spacing={0} className={styles.content}>
              <Grid item xs={12}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Button variant="contained">{item.more}</Button>
              </Grid>
            </Grid>
          </div>
        ))}
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
  );
}

