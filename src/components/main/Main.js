import React, { useState } from "react";
import "./main.css";

export default function Main() {
  const [colors, setColors] = useState({
    comprar: true,
    alquilar: false,
    vender: false,
  });
  const handleColors = (x) => {
    if (x === 1) {
      setColors({
        comprar: true,
        alquilar: false,
        vender: false,
      });
    }
    if (x === 2) {
      setColors({
        comprar: false,
        alquilar: true,
        vender: false,
      });
    }
    if (x === 3) {
      setColors({
        comprar: false,
        alquilar: false,
        vender: true,
      });
    }
  };
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
        <button
          className={colors.comprar ? " yellow" : "  white"}
          onClick={() => handleColors(1)}
        >
          COMPRAR
        </button>
        <button
          className={colors.alquilar ? " yellow" : " white"}
          onClick={() => handleColors(2)}
        >
          ALQUILAR
        </button>
        <button
          className={colors.vender ? " yellow" : " white"}
          onClick={() => handleColors(3)}
        >
          VENDER
        </button>
      </div>
      <input
        placeholder="Ciudad, provincia, barrio o referencia "
        className="buscar"
        type="text"
      />
    </main>
  );
}
