import React from "react";
import { Card } from "react-bootstrap";
import "./article.css";

export default function Article() {
  return (
    <article className="article_container">
      <h3>Nuestra selección de pisos con encanto y de ocasión</h3>
      <div className="card_container">
        <Card className="card">
          <Card.Img
            className="cardImg"
            variant="top"
            src="https://www.tecnocasa.es/img/services/adv_aticos.jpg"
          />
          <Card.Body
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Áticos para disfrutar de las vistas</Card.Title>
            <Card.Text>
              Los áticos son las viviendas perfectas si buscas espacio al aire
              libre pero no quieres mudarte a las afueras. Busca entre los
              mejores áticos con buenas vistas y mucha privacidad.
            </Card.Text>
            <button className="card_btn">Áticos en venta</button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img
            className="cardImg"
            variant="top"
            src="https://www.tecnocasa.es/img/services/adv_terraza.jpg"
          />
          <Card.Body
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Pisos con terraza, los más buscados</Card.Title>
            <Card.Text>
              Los pisos con terraza siempre han sido los más buscados, pero en
              los últimos tiempos les damos todavía más valor. En un piso con
              terraza puedes comer fuera, tomar el sol, tener un huerto...
            </Card.Text>
            <button className="card_btn" variant="primary">
              Pisos con terraza
            </button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img
            className="cardImg"
            variant="top"
            src="https://www.tecnocasa.es/img/services/adv_baratos.jpg"
          />
          <Card.Body
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>Pisos baratos: Aprovecha la oportunidad</Card.Title>
            <Card.Text>
              En nuestra selección de pisos baratos encontrarás auténticas
              oportunidades. Pisos con un precio económico para todos los
              bolsillos, no los dejes pasar.
            </Card.Text>
            <button className="card_btn" variant="primary">
              Pisos baratos
            </button>
          </Card.Body>
        </Card>
      </div>
    </article>
  );
}
