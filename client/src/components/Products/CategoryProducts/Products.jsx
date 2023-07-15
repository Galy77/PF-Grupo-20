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

    // Paginado
    const [page,setPage] = useState(1)
    let productsQuantity = categoryProducts.length
    let productsQuantityToShow = 12
    let lastPage = Math.ceil(productsQuantity/productsQuantityToShow)
    const sliceProducts = (categoryProducts, page) => {
        let numToSlice = productsQuantityToShow * page
        return categoryProducts.slice(numToSlice - productsQuantityToShow,numToSlice)
    }
    const [productsToShow, setProductsToShow] = useState(sliceProducts(categoryProducts, page))

    const handlePage = (order) => {
        if(order == 'next'){
            setPage(page + 1)
            setProductsToShow(sliceProducts(categoryProducts,page + 1))
        }else{
            setPage(page - 1)
            setProductsToShow(sliceProducts(categoryProducts,page - 1))
        }
    }
    // Paginado

    return (
        <div class='d-flex flex-column' >
            <CreatedCarousel />

                <div class='filter-products d-flex my-4'>
                    <Filters />
                    <div class='d-flex flex-column align-items-center w-100 px-4' >
                        <div class='w-100 g-4-products mx-4'>
                                <ProductsCards
                                    categoryProducts={filteredProducts ? productsToShow : ''}                 
                                />
                        </div>
                        <div class=''>
                            {
                                page == 1 ? '': <p class='m-4 border btn btn-primary' onClick={handlePage} >Anterior</p>
                            }
                            {
                                page == lastPage ? '': <p class='m-4 border btn btn-primary' onClick={() => handlePage('next')} >Siguiente</p>
                            }
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Products;