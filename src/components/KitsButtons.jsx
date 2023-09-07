import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { index, setIndex } from "../stores/indexStore";

import "../styles/KitsButtons.css";

export default function KitsButtons({ kits, onChangeKit }) {
  const $index = useStore(index);

  function handleButtonClick(index) {
    setIndex(index);
  }
  useEffect(() => {
    setIndex(0);
  }, []);
  useEffect(() => {
    setActive();
  }, [$index]);

  function setActive() {
    const button = document.querySelectorAll(".kits-button");
    button.forEach((button, index) => {
      button.classList.toggle("active", index === $index);
    });
  }

  return (
    <div className="kits-button-container">
      {kits.map((item, index) => (
        <button
          className="kits-button"
          onClick={() => handleButtonClick(index)}
          key={index}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
