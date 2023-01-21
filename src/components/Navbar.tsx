import { Button, Nav, Container, Navbar as Navbarbs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

export function Navbar() {
  return (
    <Navbarbs sticky="top" className="bg-white shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ position: "relative", width: "3.4rem", height: "3rem"}}
        >
          <BsFillCartFill size={25} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.3rem",
              height: "1.3rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(30%,30%)"
            }}
          >
            2
          </div>
        </Button>
      </Container>
    </Navbarbs>
  );
}
