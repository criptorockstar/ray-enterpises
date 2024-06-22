"use client";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./testimonials.module.scss";

const items = [
  {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    comment: "Ray Enterprises ha transformado completamente nuestra estrategia de marketing digital. Gracias a su equipo, hemos visto un incremento significativo en nuestros leads y ventas.",
    name: "Carlos Rodríguez"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    comment: "El equipo de Ray Enterprises es increíblemente profesional y eficiente. Su servicio de telemarketing nos ha ayudado a expandirnos a nuevos mercados internacionales.",
    name: "Laura Gómez"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    comment: "Gracias a Ray Enterprises, nuestra empresa ha experimentado un crecimiento impresionante. Sus servicios de asesoramiento en ventas son de primera clase.",
    name: "Javier Hernández"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    comment: "La casa de cambio digital de Ray Enterprises ha simplificado nuestras transacciones internacionales, ahorrándonos tiempo y dinero.",
    name: "María Fernández"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    comment: "El diseño gráfico de Ray Enterprises es excepcional. Han llevado nuestra marca a un nivel completamente nuevo.",
    name: "Andrés Martínez"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    comment: "Los servicios de marketing de referidos de Ray Enterprises han sido clave para el crecimiento de nuestra base de clientes. Estamos muy satisfechos con los resultados.",
    name: "Sofía López"
  }
];

const groupItems = (items, itemsPerGroup) => {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += itemsPerGroup) {
    groupedItems.push(items.slice(i, i + itemsPerGroup));
  }
  return groupedItems;
};

export default function Testimonials() {
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
    updateItemsPerGroup(); // Inicializa al cargar

    return () => window.removeEventListener('resize', updateItemsPerGroup);
  }, []);

  const groupedItems = groupItems(items, itemsPerGroup);

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide === groupedItems.length - 1 ? 0 : prevSlide + 1));
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

