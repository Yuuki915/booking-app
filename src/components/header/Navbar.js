import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  let loginToggle = "";
  const [login, setLogin] = useState(false);
  if (login === true) {
    loginToggle = "logout";
  } else {
    loginToggle = "login";
  }

  const [openAuth, setOpenAuth] = useState(false);

  return (
    <>
      <Navbar expand={false} className="navBar">
        <Container fluid>
          <Navbar.Brand href="#">Booking App</Navbar.Brand>

          <div className="nav-auth-icon d-flex">
            <FontAwesomeIcon
              className="mx-3"
              icon={faCircleUser}
              size="2x"
              onClick={() => setOpenAuth(!openAuth)}
            />
            {openAuth && (
              <div className="nav-auth">
                <p className="my-2">
                  <Nav.Link
                    href={`/auth/${loginToggle}`}
                    onClick={() => setLogin(true)}
                    className="p-0 text-secondary"
                  >
                    {loginToggle}
                  </Nav.Link>
                </p>
                <div className="auth-line"></div>
                <p className="my-2">
                  <Nav.Link
                    href={`/auth/register`}
                    className="p-0 text-secondary"
                  >
                    Register
                  </Nav.Link>
                </p>
              </div>
            )}
            {/* <Nav.Link href="/auth/logout" onClick={() => setLogin(true)}>
              {loginToggle}
            </Nav.Link> */}

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-false`}
              className="border-0"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  Booking App
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Hotel</Nav.Link>
                  <Nav.Link href="#action2">Flight</Nav.Link>
                </Nav>

                <Form className="search-field-ham d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/auth/logout">{loginToggle}</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
