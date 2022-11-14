import './App.css';
import Parent from "./components/Parent"
import { Row, Col, Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Parent />
          </Col>
          <Col>
            <Parent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
