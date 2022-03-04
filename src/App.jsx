import React from "react";
import "./sass/basics.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Almoadas from "./components/Almoadas";
import Macrame from "./components/Macrame";
import Uniformes from "./components/Uniformes";
import CubreMesa from "./components/CubreMesa";
import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Almoadas />
      <Macrame />
      <Uniformes />
      <Form />
    </div>
  );
}
