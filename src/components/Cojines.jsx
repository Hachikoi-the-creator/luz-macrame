import React from "react";
import img1 from "../img/almoada/a1.webp";
import img2 from "../img/almoada/a2.webp";
import img3 from "../img/almoada/a3.webp";

export default function Cojines() {
  return (
    <section className="cojin">
      <h2 className="sub-title">Cojines</h2>
      <img src={img1} alt="a well made pillow" />
      <img src={img2} alt="another well made pillow" />
      <img src={img3} alt="another well made pillow" />
    </section>
  );
}
