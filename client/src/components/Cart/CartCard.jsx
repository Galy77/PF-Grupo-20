import { Link } from "react-router-dom"
import { removeOrder } from "../../redux/actions";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css"
const CartCart = ({products, usuarioActual, getCart}) => {

    const removeCart = async(id) => {
        if(id){
            const data = {productsToAdd:[],productsToRemove:[id]}
            await axios.put(` https://api-market-henry-jczt.onrender.com/pf/cart/${usuarioActual.id}`,data)
            getCart()
        }
    }


    return(
        <>
            {
                products.length?products.map(el => {
                    return <div class="list-group-item d-flex">
                                <Link to={`/detail/${el.id}`} class='link w-100'>
                                    <div class='img-title d-flex'>
                                        <img class='imgs-cart' src={el.image} alt="" />
                                        <div id='title-price' class='d-flex flex-column justify-content-start'>
                                            <span>{el.name}</span>
                                            <div class='d-flex justify-content-end w-100'>
                                                <span class='txt-medium price'>{`$${el.price}`}</span>    
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <div class='d-flex flex-column justify-content-center align-items-center'>
                                        <i onClick={() => removeCart(el.id)} class="x-cart bi bi-trash-fill mx-3"></i>
                                </div>
                            </div>
                }):<p>no hay productos</p>
            }
        </>
    )
}
export default CartCart