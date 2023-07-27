/* eslint-disable react/jsx-key */
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import CreatedCarousel from '../Carousel/Carousel';
import { Link } from 'react-router-dom';
// import style from "./Home.module.css";
// import axios from "axios"
import Skeleton from '../Skeleton/Skeleton';
import './Home.css'
import { useEffect,useState } from 'react';
import { getAllCategories, getAllProducts} from '../../redux/actions';


function Home (){
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

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

    ////paginado
    let products = categories


    const [dataProducts, setDataProducts] = useState()
    const [productsToShow , setProductsToShow] = useState(products)
    const [page,setPage] = useState(1)
    let productsQuantityToShow = 12
    let lastPage = Math.ceil(productsToShow.length/productsQuantityToShow)
    const sliceProducts = (categoryProducts, page) => {
        localStorage.setItem("savePage",JSON.stringify(page))
        if(categoryProducts.length <= productsQuantityToShow) setPage(1)
        lastPage = Math.ceil(categoryProducts.length/productsQuantityToShow)
        if(page > lastPage){
            setPage(1)
        }
        let numToSlice = productsQuantityToShow * page
        setDataProducts(categoryProducts.slice(numToSlice - productsQuantityToShow,numToSlice))
    }

    const saved_page = JSON.parse(localStorage.getItem("savePage"));
    const paginado = (saved_page) => {
        if(saved_page){
            sliceProducts(products,saved_page)
            setProductsToShow(products)
            setPage(saved_page)
            return  
        }
        sliceProducts(products,2)
        setProductsToShow(products)
    }
    useEffect(() => {
        if(saved_page == null) paginado()
        else paginado(saved_page)
    },[products])

    useEffect(() => {
        if(saved_page == null) localStorage.setItem("savePage",JSON.stringify(page))
    },[dataProducts])

    const handlePage = (order) => {
        if(order == 'next'){
            setPage(page + 1)
            sliceProducts(productsToShow,page + 1)
        }else{
            setPage(page - 1)
            sliceProducts(productsToShow,page - 1)
        }
    }
    ////paginado


    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    console.log("actual",usuarioActual)
    return (
    <>
        <CreatedCarousel />
        <div class='d-flex flex-column' >
            <div class='c w-100 d-flex flex-column justify-content-center align-items-center'>
                    <div class='categories-container'>
                        {
                        dataProducts? dataProducts.map((category) => (
                                <div>
                                    <div class='card-container'>
                                        <Link to={`/products/${category.name}`} class='link'>
                                            <Card class='card'>
                                                <Card.Img variant="top" src={category.image} />
                                                <Card.Body>
                                                    <Card.Title>{category.name}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </div>
                                </div>
                        )):(
                           Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} />)
                          )}
                    </div>

            </div>
            <div class='d-flex align-items-center justify-content-center'>
                {
                    page > 1 ? <p class='m-4 border btn btn-dark' onClick={handlePage} >Anterior</p>:''
                }
                {
                    lastPage > 1 ? 
                    <p  class='p'>{`${page} de ${lastPage}`}</p>:''

                }
                {
                    page < lastPage ? <p class='m-4 border btn btn-dark' onClick={() => handlePage('next')} >Siguiente</p>:''
                }
            </div>
        </div>

    </>
    )
}

export default Home;