import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "../Products.module.css";
import '../producs.css'

function ProductsCards (props) {
    return(
        <>
        {props.categoryProducts.length ? props.categoryProducts?.map((product) => (
            <div class='m-4 border rounded' >

                <Card.Link href={`/detail/${product.id}`} class='linkProducts'>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>${product.price}</Card.Title>
                        <Card.Text>{product.name}</Card.Text>
                    </Card.Body>
                </Card.Link>

            </div> 
            )) : <h1 className={style.notFound}>En esta categoria aun no hay productos</h1>
            }
        </>
    )
}

export default ProductsCards;