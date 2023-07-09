import './NavBar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar (){
    return (
        <div>
          <Navbar id='a'expand="lg">
            <Container id='container-nav'>

              <div id='brand-container'>
                <Navbar.Brand href="/home">
                  Mercado Henry
                </Navbar.Brand>
              </div>
              {/* <div>
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >

                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 justify-content-center"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>

                  </Nav>
                </Navbar.Collapse>
              </div> */}
              <div>
              <i class="icons bi bi-person"></i>
              <Link to={'/cart'}>
                <i class="icons bi bi-cart3"></i>
              </Link>
              </div>


          </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;