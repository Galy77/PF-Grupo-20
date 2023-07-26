import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "../Products.module.css";
import '../producs.css'
import { useEffect, useState } from 'react';

function ProductsCards (props) {
    let products = []
    if(props.categoryProducts.length == props.filteredProducts.length) products = props.categoryProducts
    else products = props.filteredProducts

    const [dataProducts, setDataProducts] = useState()
    const [productsToShow , setProductsToShow] = useState(products)
    const [page,setPage] = useState(1)
    let productsQuantityToShow = 12
    let lastPage = Math.ceil(productsToShow.length/productsQuantityToShow)
    /// setDataProducts
    const sliceProducts = (categoryProducts, page) => {
        if(categoryProducts.length <= productsQuantityToShow) setPage(1)
        lastPage = Math.ceil(categoryProducts.length/productsQuantityToShow)
        if(page > lastPage){
            setPage(1)
        }
        let numToSlice = productsQuantityToShow * page
        setDataProducts(categoryProducts.slice(numToSlice - productsQuantityToShow,numToSlice))
    }

    const paginado = () => {
        sliceProducts(products,page)
        setProductsToShow(products)
    }
    useEffect(() => {
        paginado()
    },[products])
    

    const handlePage = (order) => {
        if(order == 'next'){
            setPage(page + 1)
            sliceProducts(productsToShow,page + 1)
        }else{
            setPage(page - 1)
            sliceProducts(productsToShow,page - 1)
        }
    }

    useEffect(() => {
        sliceProducts(props.filteredProducts,1)
        setProductsToShow(props.filteredProducts)
        setPage(1)
    },[props.filteredProducts])

    return(
        <>
            <div class='w-100 g-4-products mx-4'>
                {dataProducts ? dataProducts?.map((product) => (
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
            </div>
            <div class='d-flex align-items-center'>
                {
                    page > 1 ? <p class='m-4 border btn btn-primary' onClick={handlePage} >Anterior</p>:''
                }
                {
                    lastPage > 1 ? 
                    <p  class='p'>{`${page} de ${lastPage}`}</p>:''

                }
                {
                    page < lastPage ? <p class='m-4 border btn btn-primary' onClick={() => handlePage('next')} >Siguiente</p>:''
                }
            </div>
        </>
    )
}

export default ProductsCards;