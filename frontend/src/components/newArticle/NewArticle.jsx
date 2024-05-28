import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const NewArticle = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={3}>
            <input type="text" placeholder="title"></input>
            <input type="text" placeholder="author"></input>
            <input type="text" placeholder="content"></input>
            <button type="submit">Send</button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewArticle;
