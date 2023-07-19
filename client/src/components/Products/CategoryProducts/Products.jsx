import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CreatedCarousel from '../../Carousel/Carousel';
import ProductsCards from './ProductsCards';
import Filters from '../Filters/Filters';
import style from "../Products.module.css";
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../../redux/actions';
import "../producs.css"

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
    }, [])

    const search = location.search.slice(8);
    const data = products.map(el => {
        return{
            id:el.id,
            details:el.description,
            image:el.image,
            name:el.name,
            price:el.price,
            rating:el.rating,
            stock:el.stock,
            category:el.Categories[0].name
        }
    })
    
    const categoryProducts = data.filter((product) => product.category === category);
    const filteredProducts = categoryProducts.filter((product) => {
        const matchSearch = product.name.includes(search);
        const matchPrice = (min && max) ? (product.price >= min && product.price <= max) :
            (!min && max) ? (product.price <= max) :
            (min && !max) ? (product.price >= min) : true;
        const matchRating = (ratingFilterValue === "all") || (ratingFilterValue === "betterQualified" && product.rating >= 3);
        return matchSearch && matchPrice && matchRating;
    });
    return (
        <div class='d-flex flex-column' >
            <CreatedCarousel />
                <div class='filter-products d-flex my-4'>
                    <Filters />
                    <div class='d-flex flex-column align-items-center w-100 px-4' >
                                <ProductsCards
                                    categoryProducts={categoryProducts}
                                    filteredProducts={filteredProducts}
                                />
                    </div>
                </div>

        </div>
    )
}

export default Products;