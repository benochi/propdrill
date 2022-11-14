import './App.css';
import Parent from "./components/Parent"
import { Row, Col, Container } from 'reactstrap';
import { useState } from 'react'

function App() {
  const [appState, setAppState] = useState("Default app state")

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Parent appState={appState} setAppState={setAppState} />
          </Col>
          <Col>
            <Parent appState={appState} setAppState={setAppState}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
