import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CreatedCarousel from '../../Carousel/Carousel';
import ProductsCards from './ProductsCards';
import Filters from '../Filters/Filters';
import style from "../Products.module.css";
import { useState, useEffect } from 'react';
import "../producs.css"

function Products (){
    const { category } = useParams();
    const location = useLocation();
    const products = useSelector(state => state.products);
    const min = useSelector(state => state.minimumPrice);
    const max = useSelector(state => state.maximumPrice);
    const ratingFilterValue = useSelector(state => state.ratingFilterValue)

    const search = location.search.slice(8);

    const categoryProducts = products.filter((product) => product.category === category);
    const filteredProducts = categoryProducts.filter((product) => {
        const matchSearch = product.name.includes(search);
        const matchPrice = (min && max) ? (product.price >= min && product.price <= max) :
            (!min && max) ? (product.price <= max) :
            (min && !max) ? (product.price >= min) : true;
        const matchRating = (ratingFilterValue === "all") || (ratingFilterValue === "betterQualified" && product.rating >= 3);
        return matchSearch && matchPrice && matchRating;
    });


    
    const [productsToShow , setProductsToShow] = useState(categoryProducts)
    const [dataProducts, setDataProducts] = useState()

    const [page,setPage] = useState(1)

    let productsQuantityToShow = 12

    let lastPage = Math.ceil(productsToShow.length/productsQuantityToShow)

    const sliceProducts = (categoryProducts, page) => {
        if(categoryProducts.length <= productsQuantityToShow) setPage(1)
        lastPage = Math.ceil(categoryProducts.length/productsQuantityToShow)
        let numToSlice = productsQuantityToShow * page
        setDataProducts(categoryProducts.slice(numToSlice - productsQuantityToShow,numToSlice))
    }



    const handlePage = (order) => {
    if(order == 'next'){
        setPage(page + 1)
        sliceProducts(productsToShow,page + 1)
    }else{
        setPage(page - 1)
        sliceProducts(productsToShow,page - 1)
    }
}

    return (
        <div class='d-flex flex-column' >
            <CreatedCarousel />

                <div class='filter-products d-flex my-4'>
                    <Filters />
                    <div class='d-flex flex-column align-items-center w-100 px-4' >
                        <div class='w-100 g-4-products mx-4'>
                                <ProductsCards
                                    categoryProducts={categoryProducts}
                                    filteredProducts={filteredProducts}
                                    setProductsToShow={setProductsToShow}
                                    dataProducts={dataProducts}
                                    sliceProducts={sliceProducts}
                                    page={page}
                                    setPage={setPage}
                                />
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
                    </div>
                </div>

        </div>
    )
}

export default Products;