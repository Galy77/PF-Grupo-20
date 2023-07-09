import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CreatedCarousel from '../../Carousel/Carousel';
import ProductsCards from './ProductsCards';
import Filters from '../Filters/Filters';
import style from "../Products.module.css";
import { useState, useEffect } from 'react';

function Products (){
    const { category } = useParams();
    const products = useSelector(state => state.products);

    const categoryProducts = products.filter((product) => product.category === category);

    return (
        <div>
            <CreatedCarousel />
            <div className={style.container}>
                <Filters />
                <ProductsCards
                categoryProducts={categoryProducts}                 
                />
            </div>
        </div>
    )
}

export default Products;