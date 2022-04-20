import { Container, Row } from "react-bootstrap";
import "./app.css";
import Article from "./components/article/Article";
import ArticleDos from "./components/articleDos/ArticleDos";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <Container fluid="true">
      <Row className="row_img_container">
        <Row className="">
          <Header />
        </Row>
        <Row className="h-50">
          <Main />
        </Row>
      </Row>
      <Row>
        <Article />
      </Row>
      <Row>
        <ArticleDos />
      </Row>
    </Container>
  );
}

export default App;
