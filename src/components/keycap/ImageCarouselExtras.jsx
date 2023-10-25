import { useState, useEffect } from "preact/hooks";
import "../../styles/ImageCarousel.css";
import "../../styles/KeycapButtons.css";
export default function ImageCarouselExtras({ extras, element }) {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    moveSlide();
  }, [currIndex]);

  function handleClick(index) {
    setCurrIndex(index);
  }

  const nextSlide = () => {
    setCurrIndex((currIndex + 1) % extras.length);
  };

  const prevSlide = () => {
    setCurrIndex((currIndex - 1 + extras.length) % extras.length);
  };

  function moveSlide() {
    const slideContainer = document.querySelector(`.carousel-slide-${element}`);
    slideContainer.style.transform = `translateX(-${currIndex * 100}%)`;
  }

  const rightArrowElement = () => {
    if (currIndex !== extras.length - 1) {
      return (
        <div
          className="carousel-arrow right-arrow text-base"
          onClick={nextSlide}
        >
          ❯
        </div>
      );
    }
  };
  const leftArrowElement = () => {
    if (currIndex !== 0) {
      return (
        <div
          className="carousel-arrow left-arrow text-base"
          onClick={prevSlide}
        >
          ❮
        </div>
      );
    }
  };

  return (
    <section className="carousel-extras-container">
      <div className="carousel-container">
        <div className="carousel-slide-container">
          <div className={`carousel-slide carousel-slide-extra carousel-slide-${element}`}>
            {extras.map((item, index) => {
              return (
                <img
                  src={item.imageSrc}
                  className="carousel-image extras-image skeleton"
                  loading="lazy"
                  key={index}
                />
              );
            })}
          </div>
          {leftArrowElement()}
          {rightArrowElement()}
        </div>
        <div className={`carousel-dots-container flex`}>
          {extras.map((item, index) => {
            return (
              <div
                className={`carousel-dot extra-dot-${element} ${
                  index === currIndex ? " active" : ""
                }`}
                onClick={() => {
                  handleClick(index);
                }}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="keycap-button-container extras-button-container">
        {extras.map((item, index) => (
          <button
            className={`primary-button keycap-button-${element} ${
              index === currIndex ? " active" : ""
            }`}
            onClick={() => handleClick(index)}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
