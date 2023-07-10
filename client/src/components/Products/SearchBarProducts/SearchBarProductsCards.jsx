import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "../Products.module.css";

function SearchBarProductsCards (props) {
    return (
        <div className={style.cardsContainer}>
            {props.productsFiltered.length ? props.productsFiltered.map((product) => (
            <Card style={{ width: '14rem' }} className={style.cards}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    <Card.Link href={`/detail/${product.id}`}>Ver más detalles</Card.Link>
                </Card.Body>
            </Card> 
            )) : (<h1>El producto no existe</h1>)}
        </div>
    )
}

export default SearchBarProductsCards;