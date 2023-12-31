import "./Cart.css"
import CartCart from "./CartCard"
import { removeOrder } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { addOrder } from "../../redux/actions";
import { useEffect, useState } from "react";
import {initMercadoPago, Wallet } from "@mercadopago/sdk-react"
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.orders)
    const productosStorage = JSON.parse(localStorage.getItem("productos"))
    if(!products.length){
        if(productosStorage !== null) productosStorage.map(el => dispatch(addOrder(el)))
    }
  

    ///eliminar todas los productos del carrito
    const deleteCart = () => {
        products.map(el => dispatch(removeOrder(el.id)))
    }
    ///obtener el total
    let total = products.map(el => el.price*el.cant)
    ///redondear el total
    total = Math.round(total.reduce(function(acc, numero) {
        return acc + numero;
      }, 0));
    ///goBack
        //MP
        const [preferenceId, setPreferenceId] = useState(null)
        initMercadoPago("TEST-81546c5f-6e41-4a1b-94e1-d5813132d7c2")
        const createPreference = async () => {
            try {
                const response = await axios.post("http://localhost:3001/PF/create_preference",{
                    description:"cart Mercado Henry",
                    price:total,
                    quantity:1
                    // currency_id:"ARS"
                })
                console.log(response)
                const {id} = response.data;
                console.log(id)
                return id
            } catch (error) {
                console.log(error)
                console.log(1)            
            }
        }
        const handleBuy = async () => {
            const id = await createPreference()
            if(id){
                setPreferenceId(id)
            }
        }
        ////MP
    function goBack() {
        window.history.back();
    }
      

console.log(productosStorage)
    return(
        <>
        <div class='mt-4'>

            <div class='cart-container d-flex justify-content-evenly'>
                <div id='cart-card'class="d-flex flex-column align-items-center justify-content-center cuerpo">
                    {
                        productosStorage.length? productosStorage.map(productscart => {
                                return <CartCart products={productscart}/>
                        }):<p>No hay productos en tu carrito</p>
                    }

                </div>
                <div id='aux'>
                    <div class='total-container d-flex flex-column justify-content-evenly align-items-center'>
                        <span id='total'className="txt-large">TOTAL</span>
                        <span class='txt-large'>{`$${total}`}</span>

                        <button onClick={handleBuy} id="pay">Pay</button>
                        {preferenceId && <Wallet initialization={{preferenceId:preferenceId}}/>}

                        <i onClick={deleteCart} id='trash'class="bi bi-trash-fill"></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cart