import { useEffect, useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import {
  index,
  setIndex,
  incrementIndex,
  decrementIndex,
} from "../../stores/indexStore";
import "../../styles/ImageCarousel.css";

export default function ImageCarousel({ kits, id }) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const $index = useStore(index);

  function handleKitClick(index) {
    setIndex(index);
  }

  useEffect(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    moveSlide();
  }, [$index]);

  function moveSlide() {
    const slideContainer = document.querySelector(".carousel-slide");
    slideContainer.style.transform = `translateX(-${$index * 100}%)`;
  }

  const leftArrowElement = () => {
    if ($index !== 0) {
      return (
        <div
          className="carousel-arrow left-arrow text-base"
          onClick={decrementIndex}
        >
          ❮
        </div>
      );
    }
  };

  const rightArrowElement = () => {
    if ($index !== kits.length - 1) {
      return (
        <div
          className="carousel-arrow right-arrow text-base"
          onClick={incrementIndex}
        >
          ❯
        </div>
      );
    }
  };

  return (
    <section className="carousel-container ">
      <div
        className="carousel-slide-container"
        style={`view-transition-name: record-${id};`}
      >
        <div
          className="skeleton-placeholder skeleton"
          style={{ display: isImageLoading ? "block" : "none" }}
        ></div>
        <div className="carousel-slide">
          {kits.map((item, index) => {
            return (
              <img
                src={item.imageSrc}
                className="carousel-image skeleton"
                onLoad={setIsImageLoading(false)}
                key={index}
              />
            );
          })}
        </div>
        {leftArrowElement()}
        {rightArrowElement()}
      </div>
      <div className="mini-thumbnail-container">
        {kits.map((item, index) => {
          return (
            <img
              src={item.imageSrc}
              className={`mini-thumbnail skeleton ${
                index === $index ? " active" : ""
              }`}
              key={index}
              onClick={() => {
                handleKitClick(index);
              }}
            />
          );
        })}
      </div>
      <div className="carousel-dots-container">
        {kits.map((item, index) => {
          return (
            <div
              className={`carousel-dot ${index === $index ? " active" : ""}`}
              onClick={() => {
                handleKitClick(index);
              }}
              key={index}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
