import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import View from "./components/View";
import Update from "./components/Update";

function App() {
  return (
    <div>
      <Container>
        <Update />
        <View />
      </Container>
    </div>
  );
}

export default App;
