import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./main.css";

export default function Main() {
  return (
    <main>
      <div className="texto">
        <h2>Estrena tu nuevo hogar</h2>
        <p>
          Se encuentra entre los más de 7.415 pisos en venta o alquiler en las
          inmobiliarias Tecnocasa
        </p>
      </div>
      <div className="main_buttons_div">
        <button>COMPRAR</button>
        <button>ALQUILAR</button>
        <button>VENDER</button>
      </div>
      <input
        placeholder="Ciudad, provincia, barrio o referencia "
        className="buscar"
        type="text"
      />
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </main>
  );
}
