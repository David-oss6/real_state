import { Container, Row } from "react-bootstrap";
import "./app.css";
import Article from "./components/article/Article";
import ArticleDos from "./components/articleDos/ArticleDos";
import ArticleTres from "./components/articleTres/ArticleTres";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <Container fluid="false">
      <Row className="row_img_container">
        <Row className="">
          <Header />
        </Row>
        <Row className="h-50">
          <Main />
        </Row>
      </Row>
      <Row className="article">
        <Article />
      </Row>
      <Row className="articleDos">
        <ArticleDos />
      </Row>
      <Row className="articleTres">
        <ArticleTres />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
