import "./Cart.css"
import CartCart from "./CartCard"
import { removeOrder } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addOrder } from "../../redux/actions";
import { useEffect, useState } from "react";

const Cart = () => {
    const dispatch = useDispatch()
    const productosStorage = JSON.parse(localStorage.getItem("productos"))
    const products = useSelector(state => state.orders)
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


    return(
        <>
        <div class='Cart-Products d-flex justify-content-evenly align-items-start'>


            <div id='cart-card'class="d-flex flex-column">
                {
                    
                    productosStorage? productosStorage.map(productscart => {
                            return <CartCart products={productscart}/>
 
                    }):''
                }

            </div>
            <div id='aux'>
                <div class='total-container d-flex flex-column justify-content-evenly align-items-center'>
                    <span id='total'className="txt-large">TOTAL</span>
                    <span class='txt-large'>{`$${total}`}</span>
                    <Link to={'https://www.paypal.com/ar/home'}>
                        <button id="pay">Pay</button>
                    </Link>
                    <i onClick={deleteCart} id='trash'class="bi bi-trash-fill"></i>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cart