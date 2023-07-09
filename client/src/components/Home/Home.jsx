import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import CreatedCarousel from '../Carousel/Carousel';
import { Link } from 'react-router-dom';
import style from "./Home.module.css";

function Home (){
    const categories = useSelector(state => state.categories);

    return (
    <>
        <CreatedCarousel />
        <Row xs={1} md={2} className="g-4 m-3 justify-content-center">
        {categories.map((category) => (
          <Col md={3}>
            <Card>
                <Link className={style.text} to={`/products/${category.name}`}>
                    <Card.Img variant="top" src={category.img} />
                    <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                    </Card.Body>
                </Link>
            </Card>

        </Col>
        ))}
        </Row>
    </>
    )
}

export default Home;