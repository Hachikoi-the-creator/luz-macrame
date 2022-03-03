import React from "react";

export default function Form() {
  return (
    <div>
      <form action="post" netlify>
        <label htmlFor="name">Nombre:</label>
        <input type="text" placeholder="Introduce tu nombre" id="name" />

        <label htmlFor="contact"></label>
        <input type="text" placeholder="Numero o Correo" id="contact" />

        <label htmlFor="message"></label>
        <input
          type="text"
          placeholder="Aqui va tu pedido o pregunta"
          id="message"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
