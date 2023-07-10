import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "../Products.module.css";
import '../producs.css'

function ProductsCards (props) {
    return(
        <>
        <div className={style.cardsContainer}>
        {props.categoryProducts.length ? props.categoryProducts?.map((product) => (
            <Card style={{ width: '14rem' }} className={style.cards}>
                <Card.Img variant="top" src={product.image} />

                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                
            {/* <ListGroup className="list-group-flush">
            </ListGroup> */}
            <Card.Body class='d-flex justify-content-end'>
            <button class='btns btn btn-dark'>
                <Card.Link href={`/detail/${product.id}`} class='linkProducts'>details</Card.Link>
            </button>
            </Card.Body>
        </Card> 
            )) : <h1 className={style.notFound}>En esta categoria aun no hay productos</h1>
            }
            </div>
        </>
    )
}

export default ProductsCards;