import React from "react";
import "../sass/header.scss";
import myLogo from "../img/logo.png";

export default function Header() {
  const [burger, setBurger] = React.useState(false);

  return (
    <div>
      {/* BURGER */}
      <div
        id="test"
        className={`menu-btn ${burger ? "open" : ""}`}
        onClick={() => setBurger(!burger)}
      >
        <div className="menu-btn__burger"></div>
      </div>

      {/* NAVBAR */}
      <ul className={`navbar ${burger ? "" : "hidde-left"}`}>
        <li className="logo">
          <a onClick={() => setBurger(false)} href="#top">
            <img
              src={myLogo}
              alt="cute sewing logo whit a heart"
              className="page-logo"
            />
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#cojines">
            Cojines
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#macrame">
            Macrame
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#uniformes">
            Uniformes
          </a>
        </li>
      </ul>
    </div>
  );
}
