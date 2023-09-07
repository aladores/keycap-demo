import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { index, setIndex } from "../stores/indexStore";
import "../styles/ImageCarousel.css";

export default function ImageCarousel({ kits }) {
  const $index = useStore(index);

  function handleDotClick(index) {
    setIndex(index);
  }

  useEffect(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    moveSlide();
    setActive();
  }, [$index]);

  function moveSlide() {
    const slideContainer = document.querySelector(".carousel-slide");
    slideContainer.style.transform = `translateX(-${$index * 100}%)`;
  }

  function setActive() {
    const dots = document.querySelectorAll(".carousel-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === $index);
    });
  }

  return (
    <section className="carousel-container">
      <div className="carousel-slide">
        {kits.map((item, index) => {
          return (
            <img src={item.imageSrc} className="carousel-image" key={index} />
          );
        })}
      </div>
      <div className="carousel-dots-container">
        {kits.map((item, index) => {
          return (
            <div
              className="carousel-dot"
              onClick={() => {
                handleDotClick(index);
              }}
              key={index}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
