import "./App.css";
import "./reduxStore/store";
import { Container } from "react-bootstrap";
import View from "./components/View";
import "bootstrap/dist/css/bootstrap.css";
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
