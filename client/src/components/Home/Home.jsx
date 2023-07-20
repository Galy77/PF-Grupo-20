import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import CreatedCarousel from '../Carousel/Carousel';
import { Link } from 'react-router-dom';
import style from "./Home.module.css";
import axios from "axios"
import './Home.css'
import { useEffect,useState } from 'react';
import { getAllCategories } from '../../redux/actions';


function Home (){
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    },[dispatch])
    ////paginado
    let products = categories

    const [dataProducts, setDataProducts] = useState()
    const [productsToShow , setProductsToShow] = useState(products)
    const [page,setPage] = useState(1)
    let productsQuantityToShow = 12
    let lastPage = Math.ceil(productsToShow.length/productsQuantityToShow)
    const sliceProducts = (categoryProducts, page) => {
        if(categoryProducts.length <= productsQuantityToShow) setPage(1)
        lastPage = Math.ceil(categoryProducts.length/productsQuantityToShow)
        if(page > lastPage){
            setPage(1)
        }
        let numToSlice = productsQuantityToShow * page
        setDataProducts(categoryProducts.slice(numToSlice - productsQuantityToShow,numToSlice))
    }

    const paginado = () => {
        sliceProducts(products,page)
        setProductsToShow(products)
    }
    useEffect(() => {
        console.log(products)
        paginado()
    },[products])
    

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

    
    return (
    <>
        <CreatedCarousel />
        <div class='d-flex flex-column' >
            <div class='c w-100 d-flex flex-column justify-content-center align-items-center'>
                    <div class='categories-container'>
                        {dataProducts? dataProducts?.map((category) => (
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
                        )):<h1>No hay categorias disponibles</h1>
                        }
                    </div>

            </div>
            <div class='d-flex align-items-center justify-content-center'>
                {
                    page > 1 ? <p class='m-4 border btn btn-primary' onClick={handlePage} >Anterior</p>:''
                }
                {
                    lastPage > 1 ? 
                    <p  class='p'>{`${page} de ${lastPage}`}</p>:''

                }
                {
                    page < lastPage ? <p class='m-4 border btn btn-primary' onClick={() => handlePage('next')} >Siguiente</p>:''
                }
            </div>
        </div>

    </>
    )
}

export default Home;