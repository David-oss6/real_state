import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="texto_div">
        <div className="paragraf">
          <h5>Inmobiliaria</h5>
          <div>
            <a href="#" target="_blank">
              <i className="fa-brands fa-instagram media"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-facebook media"></i>
            </a>
          </div>
        </div>
        <div className="paragraf">
          <h5>SOBRE EL GRUPO TECNOCASA</h5>
          <p>Donde estamos</p>
          <p>En el mundo</p>
          <p>Trabaja con nosotros</p>
        </div>
        <div className="paragraf">
          <div>
            <h5>News</h5>
            <p>Noticias del grupo</p>
          </div>
          <div>
            <h5>Sede Nacional</h5>
            <p>www.tecnocasa.es</p>
            <p>www.tecnorete.es</p>
            <p>kiron.es</p>
          </div>
        </div>
        <div className="paragraf">
          <h5>TECNOCASA EN EL MUNDO</h5>
          <p>
            Italia, España, Hungria, México, Polonia, Francia, Túnez, Tailandia,
            República de San Marino
          </p>
          <button className="btn">Login internet</button>
          <button className="btn">Configurar Cookies</button>
        </div>
      </div>
      <p className="end_p">
        2022 Gruppo: Tecnocasa Holding S.p.A. P.IVA 08365140154 Red en
        franquicia - Cada sociedad franquiciada tiene su propio titular y es
        independiente del franquiciador. Política de privacidad | Aviso legal |
        Información sobre cookies | Información al consumidor
      </p>
    </div>
  );
}
