import { useEffect } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { index, setIndex } from "../../stores/indexStore";

import "../../styles/KeycapButtons.css";

export default function KeycapButtons({ kits }) {
  const $index = useStore(index);

  function handleButtonClick(index) {
    setIndex(index);
  }
  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <div className="keycap-button-container">
      {kits.map((item, index) => (
        <button
          className={`keycap-button ${index === $index ? " active" : ""}`}
          onClick={() => handleButtonClick(index)}
          key={index}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
