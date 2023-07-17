import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CreatedCarousel from '../../Carousel/Carousel';
import ProductsCards from './ProductsCards';
import Filters from '../Filters/Filters';
import style from "../Products.module.css";
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../../redux/actions';

function Products (){
    const { category } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const min = useSelector(state => state.minimumPrice);
    const max = useSelector(state => state.maximumPrice);
    const ratingFilterValue = useSelector(state => state.ratingFilterValue)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const search = location.search.slice(8);
    const flatProducts = products.flat();
    
    const categoryProducts = flatProducts.filter((product) => product.category === category);
    const filteredProducts = categoryProducts.filter((product) => {
        const matchSearch = product.name.includes(search);
        const matchPrice = (min && max) ? (product.price >= min && product.price <= max) :
            (!min && max) ? (product.price <= max) :
            (min && !max) ? (product.price >= min) : true;
        const matchRating = (ratingFilterValue === "all") || (ratingFilterValue === "betterQualified" && product.rating >= 3);
        return matchSearch && matchPrice && matchRating;
    });
    
    return (
        <div>
            <CreatedCarousel />
            <div className={style.container}>
                <Filters />
                <ProductsCards
                categoryProducts={filteredProducts ? filteredProducts :categoryProducts}                 
                />
            </div>
        </div>
    )
}

export default Products;