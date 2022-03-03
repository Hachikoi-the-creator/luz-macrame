import React from "react";
import "../sass/sections.scss";
import img1 from "../img/macrame/m1.webp";
import img2 from "../img/macrame/m2.webp";
import img3 from "../img/macrame/m3.webp";
import img4 from "../img/macrame/m4.webp";
import img5 from "../img/macrame/m5.webp";
import img6 from "../img/macrame/m6.webp";
import img7 from "../img/macrame/m7.webp";
import img8 from "../img/macrame/m8.webp";
import img9 from "../img/macrame/m9.webp";
import img10 from "../img/macrame/m10.webp";
import img11 from "../img/macrame/m11.webp";

export default function Macrame() {
  return (
    <section className="container">
      <h2 className="sub-title">Macrame</h2>
      <img src={img1} alt="cute macrame picture" />
      <img src={img2} alt="cute macrame picture" />
      <img src={img3} alt="cute macrame picture" />
      <img src={img4} alt="cute macrame picture" />
      <img src={img5} alt="cute macrame picture" />
      <img src={img6} alt="cute macrame picture" />
      <img src={img7} alt="cute macrame picture" />
      <img src={img8} alt="cute macrame picture" />
      <img src={img9} alt="cute macrame picture" />
      <img src={img10} alt="cute macrame picture" />
      <img src={img11} alt="cute macrame picture" />
    </section>
  );
}
