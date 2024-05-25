import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriasProvider } from "./context/CategoriasProvider";

function App() {
  return (
    <div className="app-container">
      <CategoriasProvider>
        <BebidasProvider>
          <header className="py-3 shadow">
            <h1>Drinks Finder</h1>
          </header>
          <Container className="mt-5">
            <Formulario />
            <ListadoBebidas />
            <ModalBebida />
          </Container>
        </BebidasProvider>
      </CategoriasProvider>
    </div>
  );
}

export default App;
