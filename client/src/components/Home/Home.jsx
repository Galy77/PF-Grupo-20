/* eslint-disable react/jsx-key */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import CreatedCarousel from '../Carousel/Carousel';
import { Link } from 'react-router-dom';
// import style from "./Home.module.css";
// import axios from "axios"
import './Home.css'
import { useEffect } from 'react';
import { getAllCategories } from '../../redux/actions';


function Home (){
    const categories = useSelector(state => state.categories);

    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    console.log("actual",usuarioActual)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    },[dispatch])

    return (
    <>
        <CreatedCarousel />
        <div class='w-100 d-flex flex-column justify-content-center align-items-center h-100'>
            <div class='cuerpo cards-container my-4'>
                <Row xs={1} md={2} className="grid-2 g-4 m-3 justify-content-center">
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

    </>
    )
}

export default Home;
