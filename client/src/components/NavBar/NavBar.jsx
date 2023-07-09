import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css";

function NavBar (){
const [ object, setObject ] = useState("");

const handleChange = (event) => {
  const { value } = event.target;
  setObject(value);
}

const capital = object.charAt(0).toUpperCase() + object.slice(1); 

    return (
        <div >
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <div>
            <Navbar.Brand href="/home">Mercado Henry</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className={style.container}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
          <Form className="d-flex justify-content-center">
            <Form.Control
              onChange={handleChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              />
            <Link to={`/products?search=${capital}`}><Button variant="outline-success">Search</Button></Link>
          </Form>
            <Nav.Link href="#action2">Ingresar</Nav.Link>
            <Nav.Link href="#action2">Registrarse</Nav.Link>
            <Nav.Link href="/cart">🛒</Nav.Link>
          </Nav>
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default NavBar;