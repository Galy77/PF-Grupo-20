import "./style.css"
import Slider from "./Slider";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addOrder, getProductById } from "../../redux/actions";
import { getAllProducts } from "../../redux/actions";
import Reviews from "./Reviews";
import axios from "axios";
import {initMercadoPago, Wallet } from "@mercadopago/sdk-react"

const Details = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const product = useSelector(state => state.detailProduct);
    const orders = useSelector(state => state.orders);
    const getReviews = async () => {
        const { data } = await axios(`http://localhost:3001/PF/review/${id}`)
        console.log(data)
        setReview(data.reviews)
    }

    useEffect(() => {
        dispatch(getProductById(id))
        getReviews()
    },[]) 
    

    

    console.log("este es mi console de details", product)


    const productosStorage = JSON.parse(localStorage.getItem("productos"))
    if(!orders.length){
        if(productosStorage !== null) productosStorage.map(el => dispatch(addOrder(el)))
    }
    const addCart = () => {
        dispatch(addOrder({...product,cant:1}))
        alert('producto añadido correctamente al carrito')
    }


    /// stars dropdown
    const [stars, setStars] = useState(null)

    const handleStars = (num) => {
            console.log(stars)
            if(!stars)setStars(num)
            if(stars)setStars(null)
    }
    /// stars dropdown
    /// stars dropdown
    const [coment, setComent] = useState('')

    const handleComent = (event) => {
        let value = event.target.value
        console.log(value)
        setComent(value)
    }
    /// stars dropdown
    /// reviews
    const [review, setReview] = useState()


    useEffect(() => {
        getReviews()
        console.log(product)
    },[])


    //MP
    const [cantidadProducts, setCantidadProducts] = useState()
    const [error, setError] = useState()

    const handleInput = (event) => {
        let value = event.target.value
        if(value >= 0 && value <= product.stock){
            setCantidadProducts(value)
            setError()
        } 
        else setError('ingrese un numero valido')
    }
    const [preferenceId, setPreferenceId] = useState(null)
     
    initMercadoPago("TEST-3805efe2-4de0-416c-a67b-416a74b0d3f6")
    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3001/PF/create_preference",{
                description:`${product.name}`,
                price:product.price,
                quantity:cantidadProducts ? cantidadProducts : 1
                // currency_id:"ARS"
            })
            console.log(response)
            const {id} = response.data;
            return id
        } catch (error) {
            console.log(error)          
        }
    }
    const handleBuy = async () => {
        const id = await createPreference()
        if(id){
            setPreferenceId(id)
        }
    }
    ////MP
    //setStock
    const getProductInfo = () => {
        const data = {
            id:product.id,
            cantidad:cantidadProducts ? product.stock - cantidadProducts : product.stock - 1
        }
        console.log(data)
        localStorage.setItem("setStockProduct",JSON.stringify(data))
    }
    //setStock
    //reviews
    const handleReviews = async () => {
        if(!stars||!coment) alert('completa la review')
        else{
            const data = {
                stars:stars,
                coment:coment,
                id_product:id
            }
            try {
                const response = await axios.post('http://localhost:3001/PF/review',data)
                setStars(null)
                setComent('')
                getReviews()
            } catch (error) {
                console.log(error)
                alert('hubo problemas')
            }
        }
    }
    /// reviews

    return(
        <>
            <div class="container d-flex flex-column justify-content-start border h1000 mt-4 w-100 cuerpo">
                <div class=' d-flex flex-column h-50 my-4'>

                    <div class="d-flex flex-column justify-content-start align-items-end">
                        <div className="product d-flex flex-column align-items-center">
                             <Slider images={product.image}/> 
                        </div>
                    </div>

                    <div class="col d-flex justify-content-start">

                        <div class="w-100 mt-2 d-flex flex-column justify-content-between align-items-center h-50">

                            <div class='w-100 d-flex justify-content-center align-items-center'>
                                <div id="title-description" class='col-8 text-start'>
                                    <h3>{product.name}</h3>
                                </div>
                                <div class='d-flex flex-column align-items-end  w-100 '>
                                    <Stars rating={product.rating}/>
                                </div>
                            </div>
                                <div id='stock'class='d-flex justify-content-around align-items-center'>
                                    <div class='w-0' >
                                        <input type="number" placeholder={`stock:${product.stock}`} class='text-center w-100 rounded border' value={cantidadProducts} onChange={handleInput} />
                                        {
                                            error? <p class='error'>{error}</p>:''
                                        }
                                    </div>
                                    <h3>
                                        {`$${product.price}`}
                                    </h3>
                                </div>

                                <div id="btn" class='d-flex w-100 justify-content-end align-items-center mt-4'>
                                        <button type="button"id="buy" class="btn btn-primary"  onClick={handleBuy}>
                                            Buy
                                        </button>
                                        <button type="button" id="addCart" class="btn btn-info"  onClick={addCart}>
                                            Add to{` `}
                                            <i class="bi bi-cart3"></i>
                                        </button>
                                </div>
                                {preferenceId && <Wallet initialization={{preferenceId:preferenceId}} onSubmit={getProductInfo}/>}

                        </div>

                    </div>
                    <div class='h-100'>

                        <div class='w-100 mb-5'>
                            <p class='text-start m-4'>{product.description}</p>
                        </div>

                            <div class='mx-4 '>
                                <h2>Comentarios</h2>
                            </div>
                            <div class="d-flex flex-column align-items-start h-50 p-4">
                                    {
                                        review? review.map(el => <Reviews stars={el.stars} coment={el.coment}/>):''
                                    }  
                                    <div class='h-100 d-flex align-items-center rounded w-100'>
                                        <div class='d-flex align-items-center justify-content-center w-50 h-100'>
                                            <div class=''>
                                                {stars? <Stars rating={stars} />:
                                                <div>
                                                    <i class="stars cursor bi bi-star" onClick={() => handleStars(0.9)}></i>
                                                    <i class="stars cursor bi bi-star" onClick={() => handleStars(1.9)}></i>
                                                    <i class="stars cursor bi bi-star" onClick={() => handleStars(2.9)}></i>
                                                    <i class="stars cursor bi bi-star" onClick={() => handleStars(3.9)}></i>
                                                    <i class="stars cursor bi bi-star" onClick={() => handleStars(4.9)}></i>
                                                </div>
                                                }
                                                <button class='btn btn-primary mt-2' onClick={() => handleStars()}>editar</button>
                                            </div>
                                        </div>

                                        <div class=' d-flex flex-column align-items-center'>
                                            <input  placeholder="añade un comentario" class='ml-4 mt-2 text-start w-100' value={coment} onChange={() => handleComent(event)}></input>
                                            <div class='d-flex justify-content-end w-100'>
                                                <button className="btn btn-primary w-50" onClick={handleReviews}>Enviar</button>
                                            </div>
                                        </div>
                    
                                    </div>
                            </div>
                        </div>
                </div>

                </div>

        </>
    )
}

export default Details;