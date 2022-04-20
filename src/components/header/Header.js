import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="nav_container">
      <h1>Inmobiliaria</h1>
      <ul className="nav_ul">
        <li>
          <FontAwesomeIcon icon="fa-solid fa-user-helmet-safety" />
          Blog
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-house-circle-check" />
          Comprar
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-house-lock" />
          Vender
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-house-lock" />
          Alquilar
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-house-lock" />
          Hipotecas
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-user-helmet-safety" />
          Buscar agencia inmobiliaria
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-user-helmet-safety" />
          Login
        </li>
      </ul>
    </header>
  );
}
