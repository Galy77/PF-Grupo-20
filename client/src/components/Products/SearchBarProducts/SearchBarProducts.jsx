import CreatedCarousel from "../../Carousel/Carousel";
import Filters from "../Filters/Filters";
import SearchBarProductsCards from "./SearchBarProductsCards";
import style from "../Products.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../../redux/actions";

function SearchBarProducts () {
    const location = useLocation()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const min = useSelector(state => state.minimumPrice);
    const max = useSelector(state => state.maximumPrice);
    const ratingFilterValue = useSelector(state => state.ratingFilterValue)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    const flatProducts = products.flat();
    const search = location.search.slice(8)
    
    const searchProducts = flatProducts.filter((product) => product.name.includes(search))
    const filteredProducts = searchProducts.filter((product) => {
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
                    <SearchBarProductsCards
                    productsFiltered={filteredProducts ? filteredProducts :searchProducts}                 
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBarProducts;