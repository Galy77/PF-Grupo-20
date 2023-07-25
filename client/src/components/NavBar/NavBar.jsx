import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css";
import './NavBar.css'
import CategoriesDropdown from './CategoriesDropdown';

function NavBar (){
const [ object, setObject ] = useState("");



const handleChange = (event) => {
  const { value } = event.target;
  setObject(value);
}
const capital = object.charAt(0).toUpperCase() + object.slice(1); 

    return (
        <div>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <div id='brand-container' class='col-5 text-start'>
                  <Navbar.Brand href="/home">
                    Mercado Henry
                  </Navbar.Brand>
      </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <Navbar.Brand href="/home">
                Mercado Henry
              </Navbar.Brand>
          </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 justify-content-center"
            aria-label="Search"
            onChange={handleChange}
            value={object}
          />
          <Link to={`/products?search=${capital}`}><button variant="outline-dark" class='btn btn-dark'>Search</button></Link>
        </Form>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li>
              <Link to={'/cart'} class='link'>
                <i class="icons bi bi-cart3"></i>
              </Link>
          </li>
          <li >
            <Link to={`/create`} class='link'>
              <i class="icons bi bi-plus"></i>
            </Link>
          </li>
          <li>
            <Link to = {'/profile'}>
                  <i class="icons bi bi-person"></i>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <i class="icons bi bi-info-circle"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;