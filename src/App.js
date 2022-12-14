import './App.css';
import Parent from "./components/Parent"
import { Row, Col, Container } from 'reactstrap';
import { useState } from 'react'

function App() {
  const [appState, setAppState] = useState("Default app state")

  return (
    <div className="App">
      <h2 className="AppTitle">I am the APP state: {appState}</h2>
      <Container>
        <Row>
          <Col>
            <h4 className="AppTitle">Parent 1</h4>
            <Parent appState={appState} setAppState={setAppState} />
          </Col>
          <Col>
            <h4 className="AppTitle">Parent 2</h4>
            <Parent appState={appState} setAppState={setAppState}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
