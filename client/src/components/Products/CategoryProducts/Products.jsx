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
    const alphabeticFilterValue = useSelector(state => state.lettersOrder)
    const priceOrderValue = useSelector(state => state.priceOrder)

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
            category:el.Categories.name
        }
    })

    const alphabeticOrderFilter = (productos, orden, sortByPrice) => {
    const ordenAscendente = orden === "A-Z";
    const ordenValor = ordenAscendente ? 1 : -1;

    productos.sort((productoA, productoB) => {
        const nombreA = productoA.name.toUpperCase();
        const nombreB = productoB.name.toUpperCase();

        if (nombreA < nombreB) {
            return -1 * ordenValor;
        } else if (nombreA > nombreB) {
            return 1 * ordenValor;
        } else {
            return 0;
        }
    });

    if (sortByPrice === "Menor") {
        productos.sort((productoA, productoB) => productoA.price - productoB.price);
    } else if (sortByPrice === "Mayor") {
        productos.sort((productoA, productoB) => productoB.price - productoA.price);
    }

    return productos;
};
    
    const categoryProducts = data.filter((product) => product.category === category);
    const filteredsProducts = categoryProducts.filter((product) => {
        const matchSearch = product.name.includes(search);
        const matchPrice = (min && max) ? (product.price >= min && product.price <= max) :
            (!min && max) ? (product.price <= max) :
            (min && !max) ? (product.price >= min) : true;
        const matchRating = (ratingFilterValue === "all") || (ratingFilterValue === "betterQualified" && product.rating >= 3);
        return matchSearch && matchPrice && matchRating;
    });
    const filteredProducts = alphabeticOrderFilter(filteredsProducts, alphabeticFilterValue, priceOrderValue);

    return (
        <div class='d-flex flex-column' >
            <CreatedCarousel />
                <div class='filter-products d-flex my-4'>
                    <Filters />
                    <div class='d-flex flex-column align-items-center w-100 px-4' >
                                <ProductsCards
                                    categoryProducts={alphabeticOrderFilter(categoryProducts, alphabeticFilterValue, priceOrderValue)}
                                    filteredProducts={filteredProducts}
                                />
                    </div>
                </div>

        </div>
    )
}

export default Products;