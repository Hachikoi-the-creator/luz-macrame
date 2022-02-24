import React from "react";
import "../sass/header.scss";

export default function Header() {
  const [burger, setBurger] = React.useState(false);

  return (
    <div className="header">
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
          <a href="#">LOGO</a>
        </li>
        <li>
          <a href="#">soma</a>
        </li>
        <li>
          <a href="#">soma</a>
        </li>
        <li>
          <a href="#">soma</a>
        </li>
        <li>
          <a href="#">soma</a>
        </li>
      </ul>
      <div className="test">7️⃣</div>
    </div>
  );
}
