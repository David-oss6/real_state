import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [nav_class, setNav_class] = useState("nav_container");
  const [nav_out, setNav_out] = useState(false);
  const [size, setSize] = useState();
  const [modal, setModal] = useState(false);
  const [hamburguer_class, setHamburguer_class] = useState(
    "modal_hamburguer_btn white"
  );

  window.addEventListener("resize", (e) => {
    setSize(e.target.innerWidth);
  });

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 40) {
      setNav_class("nav_container color_change ");
      setNav_out(true);
      setHamburguer_class("modal_hamburguer_btn i_colorChange");
    }
    if (window.scrollY < 39) {
      setNav_class("nav_container ");
      setNav_out(false);
      setHamburguer_class("modal_hamburguer_btn white");
    }
  });

  return (
    <header className={nav_class}>
      <h1 className={nav_out ? "i_colorChange title" : "title"}>
        Inmobiliaria
      </h1>
      {size > 1000 ? (
        <ul className="nav_ul">
          <li>
            <i
              className={
                nav_out
                  ? "fa-solid fa-house-lock i_colorChange"
                  : "fa-solid fa-house-lock"
              }
            />
            Blog
          </li>
          <li>
            <i
              className={
                nav_out
                  ? "fa-solid fa-house-lock i_colorChange"
                  : "fa-solid fa-house-lock"
              }
            />
            Comprar
          </li>
          <li>
            <i
              className={
                nav_out
                  ? "fa-solid fa-house-lock i_colorChange"
                  : "fa-solid fa-house-lock"
              }
            />
            Vender
          </li>
          <li>
            <i
              className={
                nav_out
                  ? "fa-solid fa-house-lock i_colorChange"
                  : "fa-solid fa-house-lock"
              }
            />
            Alquilar
          </li>
          <li>
            <i
              className={
                nav_out
                  ? "fa-solid fa-house-lock i_colorChange"
                  : "fa-solid fa-house-lock"
              }
            />
            Hipotecas
          </li>
          <li>
            <i
              className={
                nav_out
                  ? "fa-solid fa-house-lock i_colorChange"
                  : "fa-solid fa-house-lock"
              }
            />
            Buscar agencia inmobiliaria
          </li>
          <li>
            <i
              className={
                nav_out
                  ? "fa-solid fa-house-lock i_colorChange"
                  : "fa-solid fa-house-lock"
              }
            />
            Login
          </li>
        </ul>
      ) : (
        <>
          <div
            className={
              modal ? "modal_container modal_container_in" : "modal_container"
            }
          >
            <button
              className="modal_btn"
              onClick={() => {
                setModal(!modal);
              }}
            >
              X
            </button>
            <ul className="modal_ul">
              <li className="modal_li">Blog</li>
              <li className="modal_li">Comprar</li>
              <li className="modal_li">Vender</li>
              <li className="modal_li">Alquilar</li>
              <li className="modal_li">Hipotecas</li>
              <li className="modal_li">Buscar agencia inmobiliaria</li>
              <li className="modal_li">Login</li>
            </ul>
          </div>
          <button className={hamburguer_class} onClick={() => setModal(!modal)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </>
      )}
    </header>
  );
}
