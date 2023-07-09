import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function SearchBarProductsCards () {
    const products = useSelector(state => state.products)
    const location = useLocation();

    
    const valor = location.search.split("=").pop();
    const productsFiltered = products.filter((obj) => obj.name.includes(valor ? valor : null))
    
    console.log(productsFiltered)
    return (
        <div>
            {productsFiltered.length ? productsFiltered.map((product) => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/home">Ver más detalles</Card.Link>
                </Card.Body>
            </Card> 
            )) : (<h1>El producto no existe</h1>)}
        </div>
    )
}

export default SearchBarProductsCards;