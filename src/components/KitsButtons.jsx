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

  return (
    <div className="kits-button-container">
      {kits.map((item, index) => (
        <button
          className={`kits-button ${index === $index ? " active" : ""}`}
          onClick={() => handleButtonClick(index)}
          key={index}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
