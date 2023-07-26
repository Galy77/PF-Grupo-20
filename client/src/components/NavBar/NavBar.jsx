import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'

function NavBar (){
const [ object, setObject ] = useState("");
const navigate = useNavigate()

const handleChange = (event) => {
  const { value } = event.target;
  setObject(value);
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    const capital = object.charAt(0).toUpperCase() + object.slice(1);
    const searchUrl = capital.length > 0 ? `/products?search=${capital}` : '/';
    navigate(searchUrl);
  }
};

const capital = object.charAt(0).toUpperCase() + object.slice(1); 

    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
      <div id='brand-container' class='col-5 text-start'>
              <Link to = {'/'}>
                <img src="/homelogo.png" alt="logo" style={{ width: "140px", height: "40px" }}/>
              </Link>
      </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      
      <div class="offcanvas-body">
      <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 justify-content-center"
            aria-label="Search"
            onChange={handleChange}
            onKeyPress={capital !== undefined && handleKeyPress}
            value={object}
          />
          <Link to={capital && `/products?search=${capital}`}><Button variant="outline-dark" class='btn btn-dark'>Search</Button></Link>
        </Form>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                   <li class='text-center d-flex align-items-center'>
              <Link to={'/cart'} class='link'>
                <i class="icons bi bi-cart3"></i>
              </Link>
          </li>
          <li class='text-center d-flex align-items-center'>
            <Link to={`/create`} class='link d-flex justify-content-center'>
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