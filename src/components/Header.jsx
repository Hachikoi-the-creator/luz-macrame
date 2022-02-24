import React from "react";
import "../sass/header.scss";

export default function Header() {
  const [burger, setBurger] = React.useState(false);

  return (
    <div>
      <div className="test" id="top">
        7️⃣
      </div>
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
            LOGO
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Almoadas
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Macrame
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Uniformes
          </a>
        </li>
        <li>
          <a onClick={() => setBurger(false)} href="#">
            Camino de mesa
          </a>
        </li>
      </ul>
    </div>
  );
}
