import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import CreatedCarousel from '../Carousel/Carousel';
import { Link } from 'react-router-dom';
import style from "./Home.module.css";
import './Home.css'


function Home (){
    const categories = useSelector(state => state.categories);
   
    return (
    <>
        <CreatedCarousel />
        <div class='a w-100 d-flex justify-content-center'>
            <div class='cards-container'>
                <Row xs={1} md={2} className="g-4 m-3 justify-content-center">
                    {categories.map((category) => (
                            <Col md={3}>
                                <div class='card-container'>
                                    <Link to={`/products/${category.name}`} class='link'>
                                        <Card class='card'>
                                            <Card.Img variant="top" src={category.img} />
                                            <Card.Body>
                                                <Card.Title>{category.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            </Col>
                    ))}
                </Row>
            </div>
        </div>
        <footer>
            <div>
                    <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>

    </>
    )
}

export default Home;