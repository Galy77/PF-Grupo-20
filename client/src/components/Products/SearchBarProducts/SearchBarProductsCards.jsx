/* eslint-disable react/jsx-key */
import Card from 'react-bootstrap/Card';
import '../producs.css'
import { useState,useEffect } from 'react';

function SearchBarProductsCards (props) {
    let products = props.productsFiltered
    const [dataProducts, setDataProducts] = useState()
    const [productsToShow , setProductsToShow] = useState(products)
    const [page,setPage] = useState(1)
    const [isLoadedPage, setIsLoadedPage] = useState(1)
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = urlParams.get('page');

    let productsQuantityToShow = 12
    let lastPage = Math.ceil(productsToShow.length/productsQuantityToShow)
    /// setDataProducts
    const sliceProducts = (categoryProducts, page) => {
        const newUrl = `${window.location.pathname}?page=${page}`;
        window.history.replaceState(null, null, newUrl);
        if(categoryProducts.length <= productsQuantityToShow) setPage(1)
        lastPage = Math.ceil(categoryProducts.length/productsQuantityToShow)
        if(page > lastPage){
            setPage(1)
        }
        let numToSlice = productsQuantityToShow * page
        setDataProducts(categoryProducts.slice(numToSlice - productsQuantityToShow,numToSlice))
    }
    const paginado = (currentPage) => {
        if(currentPage){
            sliceProducts(products,currentPage)
            setProductsToShow(products)
            setPage(parseInt(currentPage))
            return
        }
        sliceProducts(products,page)
        setProductsToShow(products)
    }

    useEffect(() => {

        if(isLoadedPage == 4){
            sliceProducts(props.productsFiltered,1)
            setProductsToShow(props.productsFiltered)
            setPage(1)
        }else{
            setIsLoadedPage(isLoadedPage + 1)
            paginado(currentPage)
        }
    },[props.productsFiltered])

    

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
        sliceProducts(props.productsFiltered,1)
        setProductsToShow(props.productsFiltered)
        setPage(1)
    },[props.productsFiltered])

    return (
        <>
            <div class='w-100 g-4-products mx-4'>
                {dataProducts ? dataProducts.map((product) => (
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
            <div class='d-flex align-items-center'>
                {
                    page > 1 ? <p class='m-4 border btn btn-dark' onClick={handlePage} >Anterior</p>:''
                }
                {
                    lastPage > 1 ? 
                    <p  class='p'>{`${page} de ${lastPage}`}</p>:''

                }
                {
                    page < lastPage ? <p class='m-4 border btn btn-dark' onClick={() => handlePage('next')} >Siguiente</p>:''
                }
            </div>
        </>
    )
}

export default SearchBarProductsCards;