import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import OptionsForm from "./components/OptionsForm";

const App = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Media Analyst</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3 mb-5">
          <OptionsForm />
        </Container>
      </main>
    </div>
  );
};

export default App;
