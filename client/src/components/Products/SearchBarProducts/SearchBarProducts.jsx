import CreatedCarousel from "../../Carousel/Carousel";
import Filters from "../Filters/Filters";
import SearchBarProductsCards from "./SearchBarProductsCards";

function SearchBarProducts () {
    return (
        <div>
            <CreatedCarousel />
            <Filters />
            <SearchBarProductsCards />
        </div>
    )
}

export default SearchBarProducts;