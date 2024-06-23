"use client";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./slides.module.scss";
import { Item, SlidesProps } from "@/types/testimonialTypes";

const groupItems = (items: Item[], itemsPerGroup: number): Item[][] => {
  const groupedItems: Item[][] = [];
  for (let i = 0; i < items.length; i += itemsPerGroup) {
    groupedItems.push(items.slice(i, i + itemsPerGroup));
  }
  return groupedItems;
};

export default function Slides({ items }: SlidesProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerGroup, setItemsPerGroup] = useState(3);

  useEffect(() => {
    const updateItemsPerGroup = () => {
      if (window.innerWidth <= 600) {
        setItemsPerGroup(1);
      } else if (window.innerWidth <= 899) {
        setItemsPerGroup(2);
      } else {
        setItemsPerGroup(3);
      }
    };

    window.addEventListener('resize', updateItemsPerGroup);
    updateItemsPerGroup(); 

    return () => window.removeEventListener('resize', updateItemsPerGroup);
  }, []);

  const groupedItems = groupItems(items, itemsPerGroup);

  const handleNext = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide === groupedItems.length - 1 
      ? 0 
      : prevSlide + 1)
    );
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? groupedItems.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className={styles.testimonials}>
      {groupedItems.map((group, groupIndex) => (
        <div 
          key={groupIndex} 
          className={styles.slide}
          style={{ 
            display: groupIndex === activeSlide ? 'flex' : 'none', 
            justifyContent: 'space-around' 
          }}>
          {group.map((item, index) => (
            <div 
              key={index} 
              className={styles.container}>
              <img src={item.avatar} alt={item.name} className={styles.avatar}/>
              <div className={styles.content}>
                <p>{item.comment}</p>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      ))}

      <IconButton className={styles.leftButton} onClick={handlePrev}>
        <ChevronLeftIcon />
      </IconButton>

      <IconButton className={styles.rightButton} onClick={handleNext}>
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
}
