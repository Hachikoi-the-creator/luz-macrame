import React from "react";
import "../sass/sections.scss";
import img1 from "../img/almoada-1.webp";
import img2 from "../img/almoada-2.webp";

export default function Almoadas() {
  return (
    <section>
      <h2 className="sub-title">Almoadas</h2>
      <img src={img1} alt="a well made pillow" />
      <img src={img2} alt="another well made pillow" />
      <img src={img2} alt="another well made pillow" />
      <img src={img2} alt="another well made pillow" />
      <img src={img2} alt="another well made pillow" />
      <img src={img2} alt="another well made pillow" />
    </section>
  );
}
