import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CreatedCarousel from '../../Carousel/Carousel';
import ProductsCards from './ProductsCards';
import Filters from '../Filters/Filters';
import style from "../Products.module.css";
import { useState, useEffect } from 'react';

function Products (){
    const { category } = useParams();
    const location = useLocation();
    const products = useSelector(state => state.products);

    const search = location.search.slice(8);

    const categoryProducts = products.filter((product) => product.category === category);
    const searchFilter = categoryProducts.filter((product) => product.name.includes(search));

    return (
        <div>
            <CreatedCarousel />
            <div className={style.container}>
                <Filters />
                <ProductsCards
                categoryProducts={search ? searchFilter :categoryProducts}                 
                />
            </div>
        </div>
    )
}

export default Products;