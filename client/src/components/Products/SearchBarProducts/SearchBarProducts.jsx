import CreatedCarousel from "../../Carousel/Carousel";
import Filters from "../Filters/Filters";
import SearchBarProductsCards from "./SearchBarProductsCards";
import style from "../Products.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function SearchBarProducts () {
    const location = useLocation()
    const products = useSelector(state => state.products)
    const min = useSelector(state => state.minimumPrice);
    const max = useSelector(state => state.maximumPrice);
    const ratingFilterValue = useSelector(state => state.ratingFilterValue)

    const search = location.search.slice(8)
    
    const searchProducts = products.filter((product) => product.name.includes(search))
    const filteredProducts = searchProducts.filter((product) => {
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
                <SearchBarProductsCards
                productsFiltered={filteredProducts ? filteredProducts :searchProducts}                 
                />
            </div>
        </div>
    )
}

export default SearchBarProducts;