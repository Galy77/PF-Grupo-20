import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "../Products.module.css";
import '../producs.css'

function SearchBarProductsCards (props) {
    return (
        <div className={style.cardsContainer}>
            {props.productsFiltered.length ? props.productsFiltered.map((product) => (
            <Card style={{ width: '14rem' }} className={style.cards}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Body class='d-flex justify-content-end'>
                    <button class='btns btn btn-dark'>
                        <Card.Link href={`/detail/${product.id}`} class='linkProducts'>details</Card.Link>
                    </button>
            </Card.Body>
            </Card> 
            )) : (<h1>El producto no existe</h1>)}
        </div>
    )
}

export default SearchBarProductsCards;