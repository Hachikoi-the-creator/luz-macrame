import React from "react";
import "../sass/hero.scss";
import logo from "../img/cover.png";

export default function Hero() {
  return (
    <div className="hero top">
      <h1>
        <img src={logo} alt="" />
      </h1>
      <h2>Macrame, Uniformes, Manteles, etc.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde
        provident officiis quos, laboriosam earum et repellendus ad esse ipsam
        pariatur atque blanditiis.
      </p>
    </div>
  );
}
