import React from "react";
import "./sass/basics.scss";
import "./sass/sections.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cojines from "./components/Cojines";
import Macrame from "./components/Macrame";
import Uniformes from "./components/Uniformes";
import Form from "./components/Form";
import Llaveros from "./components/Llaveros";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Llaveros />
      <Cojines />
      <Macrame />
      <Uniformes />
      {/* <Form /> */}
    </div>
  );
}
