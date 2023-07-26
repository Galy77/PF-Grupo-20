import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CreatedCarousel from '../../Carousel/Carousel';
import ProductsCards from './ProductsCards';
import Filters from '../Filters/Filters';
import style from "../Products.module.css";
import { useState, useEffect } from 'react';
import { getAllProducts, getAllCategories } from '../../../redux/actions';
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

        // Primero, llamamos a getAllCategories y esperamos su respuesta
        dispatch(getAllCategories())
          .then((categories) => {
            // Una vez que tenemos las categorías, llamamos a getAllProducts
            return dispatch(getAllProducts());
          })
          .then((products) => {
            // Aquí ya tenemos las categorías y los productos.
            // Puedes realizar cualquier acción adicional que requiera ambos.
            console.log("Categorías:", categories);
            console.log("Productos:", products);
          })
          .catch((error) => {
            // Manejo de errores, si es necesario
            console.error("Error al obtener categorías y productos:", error);
          });
      }, [dispatch]);

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
    
    const categoryProducts = data.filter((product) => product.category === category);
    const filteredsProducts = categoryProducts.filter((product) => {
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