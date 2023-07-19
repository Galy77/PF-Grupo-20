/* eslint-disable react/jsx-key */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "../Products.module.css";
import '../producs.css'

function SearchBarProductsCards (props) {
    return (
        <div className={style.cardsContainer}>
            {props.productsFiltered.length ? props.productsFiltered.map((product) => (
                            <div class='card-products m-4 rounded' >
                                <Card.Link href={`/detail/${product.id}`} class='linkProducts'>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{`$ ${product.price}`}</Card.Text>
                                </Card.Body>
                            </Card.Link>
                            </div>
            )) : (<h1>El producto no existe</h1>)}
        </div>
    )
}

export default SearchBarProductsCards;