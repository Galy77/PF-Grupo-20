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
        <CreatedCarousel/>
        <Row xs={1} md={2} expand="lg" className={style.cards}>
        {categories.map((category) => (
            <Col xs={12} sm={6} md={4} lg={3}>
                <Card className={style.card}>
                    <Link to={`/products/${category.name}`}>
                        <Card.Img variant="top" src={category.img} className={style.img} />
                        <Card.Body>
                            <Card.Title className={style.title}>{category.name}</Card.Title>
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