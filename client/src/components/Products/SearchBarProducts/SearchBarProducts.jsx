import Filters from "../Filters/Filters";
import SearchBarProductsCards from "./SearchBarProductsCards";
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
    const alphabeticFilterValue = useSelector(state => state.lettersOrder)
    const priceOrderValue = useSelector(state => state.priceOrder)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    const flatProducts = products.flat();
    const search = location.search.slice(8)

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

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
    
    const searchProducts = flatProducts.filter((product) =>
        removeAccents(product.name.toUpperCase()).includes(
        removeAccents(search.toUpperCase())
        )
    );

    const filteredsProducts = searchProducts.filter((product) => {
        const normal = removeAccents(product.name.toUpperCase())
        const matchSearch = normal.includes(search.toUpperCase());
        const matchPrice = (min && max) ? (product.price >= min && product.price <= max) :
            (!min && max) ? (product.price <= max) :
            (min && !max) ? (product.price >= min) : true;
        const matchRating = (ratingFilterValue === "all") || (ratingFilterValue === "betterQualified" && product.rating >= 3);
        return matchSearch && matchPrice && matchRating;
    });
    
    const filteredProducts = alphabeticOrderFilter(filteredsProducts, alphabeticFilterValue, priceOrderValue);


    return (
        <div class='d-flex flex-column' >
            <div class='filter-products d-flex my-4'>
                <Filters search={search}/>
                <div class='d-flex flex-column align-items-center w-100 px-4' >
                    <SearchBarProductsCards
                    productsFiltered={filteredProducts ? filteredProducts :alphabeticOrderFilter(searchProducts, alphabeticFilterValue, priceOrderValue)}                 
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBarProducts;