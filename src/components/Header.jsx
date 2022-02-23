import React from "react";
import "../sass/header.scss";

export default function Header() {
  const [burger, setBurger] = React.useState(false);

  return (
    <div>
      <div
        className={`menu-btn ${burger ? "open" : ""}`}
        onClick={() => setBurger(!burger)}
      >
        <div className="menu-btn__burger"></div>
      </div>
    </div>
  );
}
