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
import Swal from "sweetalert2"
const Details = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const product = useSelector(state => state.detailProduct);
    const orders = useSelector(state => state.orders);

    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    const [isBuy,setIsBuy] = useState()
    const user = JSON.parse(localStorage.getItem("usuarioActual"));
    const getReviews = async () => {
        const { data } = await axios(`http://localhost:3001/pf/review/${id}`)
        setReview(data.reviews)
    }
      


    useEffect(() => {
        dispatch(getProductById(id))
        getReviews()
    },[]) 
    if(!isBuy){
        if(user){
            axios.get(`http://localhost:3001/pf/payment/${user.id}`)
            .then(response => {
                const isPay = response.data.filter(el => el.id_product == id)
                setIsBuy(isPay)
                console.log(isPay)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    

    console.log("este es mi console de details", user, usuarioActual)


    const productosStorage = JSON.parse(localStorage.getItem("productos"))
    if(!orders.length){
        if(productosStorage !== null) productosStorage.map(el => dispatch(addOrder(el)))
    }

    const addCart = async () => {
        const cart = await axios(`http://localhost:3001/pf/cart/${user.id}`)
        if(cart.data.response == "no hay carrito"){
            const data = {
                id_user:user.id,
                product_cart:[product.id]
            }
            try {
                if(data) await axios.post('http://localhost:3001/pf/cart',data)
                Swal.fire(
                    'Producto añadido correctamente al carrito!',
                    '',
                    'success'
                  )

            } catch (error) {
                console.log(error)
            }
        }else{
            const data = {
                productsToAdd:[product.id],
                productsToRemove:[]
            }
            try {
                if(data) await axios.put(`http://localhost:3001/pf/cart/${user.id}`,data)
                Swal.fire(
                    'Producto añadido correctamente al carrito!',
                    '',
                    'success'
                  )
            } catch (error) {
                console.log(error)
            }
        }
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


    // useEffect(() => {
    //     getReviews()
    //     console.log(product)
    // },[])


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
     
    initMercadoPago("TEST-81546c5f-6e41-4a1b-94e1-d5813132d7c2")
    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3001/pf/create_preference",{
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
        console.log(review)
        if(id){
            setPreferenceId(id)
        }
    }
    ////MP
    //setStock
    const getProductInfo = () => {
        const data = {
            id:product.id,
            cantidad:cantidadProducts ? product.stock - cantidadProducts : product.stock - 1,
            amount:cantidadProducts ? cantidadProducts * product.price : product.price
        }
        localStorage.setItem("setStockProduct",JSON.stringify(data))
    }
    //setStock
    //reviews
    const handleReviews = async () => {
        if(!stars||!coment) alert('completa la review')
        else{
            let data = {
                stars:stars,
                coment:coment,
                id_product:id,
                id_user:user.id
            }
            try {

                await axios.post('http://localhost:3001/pf/review',data)

                setStars(null)
                setComent('')
                getReviews()
                //setRating
                if(!review.length){
                    if(product.stock){
                        data = {
                            rating:(product.rating + stars)/2
                        }
                    }else{
                        data = {
                            rating:stars
                        }
                    }
                    console.log(data)
                    const response = await axios.put(`http://localhost:3001/pf/rating/${product.id}`,data)
                    dispatch(getProductById(id))
                    console.log({prueba:response.data})
                }else{
                    data = [...review.map(el => parseFloat(el.stars)),stars]
                    console.log({data1:data})
                    data = data.reduce(function(acc, numero) {
                        return acc + numero;
                      }, 0)/data.length;
                    data = data.toFixed(2)
                    data = {
                        rating:data
                    }
                    console.log({data:data})
                    await axios.put(`http://localhost:3001/pf/rating/${product.id}`,data)
                    dispatch(getProductById(id))
                }
                //
            } catch (error) {
                console.log(error)
                alert('hubo problemas')
            }
        }
    }
    /// reviews

    return(
        <>
            <div class="container d-flex flex-column justify-content-start border mt-4 w-100 cuerpo">
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
                                {
                                    preferenceId && <p onClick={() => setPreferenceId(null)} class='cancelar'>cancelar</p>
                                }

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
                                    review? review.map(el => <Reviews stars={el.stars} coment={el.coment} User={el.User} product={product} getReviews={getReviews} id_user={el.id_user}/>):''
                                }
                                {
                                    review? review.filter(el => el.id_user == user.id).length? <span class='text-center w-100'>ya hiciste un cometario pa</span> : isBuy?isBuy.length? <div class='h-100 d-flex align-items-center rounded w-100'>
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
                    
                                    </div>:'':<span class='text-center w-100'>no has comprado este producto</span>:''
                                }  
                            </div>                 
                        </div>
                </div>

                </div>

        </>
    )
}

export default Details;