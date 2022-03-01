import React from "react";
import "../sass/sections.scss";
import img1 from "../img/macrame-1.webp";
import img2 from "../img/macrame-2.webp";
import img3 from "../img/macrame-3.webp";
import img4 from "../img/macrame-4.webp";

export default function Macrame() {
  return (
    <section className="container">
      {/* <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
      </svg> */}
      <h2 className="sub-title">Macrame</h2>
      <img src={img1} alt="missing-img" />
      <img src={img2} alt="missing-img" />
      <img src={img3} alt="missing-img" />
      <img src={img4} alt="missing-img" />
      {/* <div class="curve"></div> */}
    </section>
  );
}
