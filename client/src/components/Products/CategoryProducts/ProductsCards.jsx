import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "../Products.module.css";
import '../producs.css'
import { useEffect, useState } from 'react';

function ProductsCards (props) {
    let products = [];

    if(props.categoryProducts.length == props.filteredProducts.length){
    
        products = props.categoryProducts
    }else{

        products = props.filteredProducts
    }

    useEffect(() => {
        props.sliceProducts(products,props.page)
        // props.setProductsToShow(products)
    },[props.page])

    console.log(props.dataProducts)
    return(
        <>
        {props.dataProducts ? props.dataProducts?.map((product) => (
            <div class='card-products m-4 rounded' >

                <Card.Link href={`/detail/${product.id}`} class='linkProducts'>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{`$ ${product.price}`}</Card.Text>
                    </Card.Body>
                </Card.Link>
            </div> 
            )) : <h1 className={style.notFound}>En esta categoria aun no hay productos</h1>
            }
        </>
    )
}

export default ProductsCards;