/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import "./Cart.css"
import CartCart from "./CartCard"
import { removeOrder } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { addOrder } from "../../redux/actions";
import { useEffect, useState } from "react";
import {initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import { useAuth } from "../../context/AuthContext";

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { user } = useAuth();
    const [isUser, setIsUser] = useState();
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    const [products, setProducts] = useState([]) 
    const [dataProducts, setDataProducts] = useState(true)
    ///obtener el total
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        if(usuarioActual){
            setIsUser(usuarioActual);
        }else{
            setIsUser(user);
        }
    }, []);

    
    const getCart = async () => {
        const { data } = await axios(` http://localhost:3001/pf/cart/${usuarioActual.id}`)
        if(data.Products.length){
            let allPrice = data.Products.map(el => el.price)
            allPrice = Math.round(allPrice.reduce(function(acc, numero) {
                return acc + numero;
              }, 0));
            setTotal(allPrice)
            setProducts(data.Products)

        } else {
            setDataProducts(!dataProducts)
            setProducts([])
            setTotal(0)
        }
    }
    if(!products.length && dataProducts){
        getCart()
    }

    

    ///eliminar todas los productos del carrito
    const deleteCart = async () => {
        if(products.length){
            const productsToRemove = products.map(el => el.id)
            const data = {productsToAdd:[],productsToRemove}
            await axios.put(` http://localhost:3001/pf/cart/${usuarioActual.id}`,data)
            getCart()
        }
    }
    

        //MP
        const [preferenceId, setPreferenceId] = useState(null)
        initMercadoPago("TEST-81546c5f-6e41-4a1b-94e1-d5813132d7c2")
        const createPreference = async () => {
            try {

                if(total > 0){
                    const response = await axios.post(" http://localhost:3001/pf/create_preference",{
                        description:"cart Mercado Henry",
                        price:total,
                        quantity:1
                        // currency_id:"ARS"
                    })
                    const {id} = response.data;
                    return id
                }

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
      
        
        const getProductInfo = () => {
            const data = products.map(el => {
                return{
                    id:el.id,
                    cantidad:el.stock-1,
                    amount:el.price
                }
            })
            localStorage.setItem("setStockProduct",JSON.stringify(data))
        }
        //setStock


        if (!isUser) {
            navigate("/login");
            return null
          }

        return (
            <>
                <div class='mt-4'>

                    <div class='cart-container d-flex justify-content-evenly'>

                        <div id='cart-card'class="d-flex flex-column align-items-center justify-content-center cuerpo">


                            <CartCart products={products}  usuarioActual={usuarioActual} getCart={getCart} setTotal={setTotal} total={total}/>


                        </div>
                        <div id='aux'>
                            <div class='total-container d-flex flex-column justify-content-evenly align-items-center'>
                                <span id='total'className="txt-large">TOTAL</span>
                                <span class='txt-large'>{`$${total}`}</span>

                                <button onClick={handleBuy} id="pay">Pay</button>

                                {
                                preferenceId && <Wallet initialization={{preferenceId:preferenceId}} onSubmit={getProductInfo}/>
                                }
                                {
                                    preferenceId && <p onClick={() => setPreferenceId(null)} class='cancelar'>cancelar</p>
                                }

                                <i onClick={deleteCart} id='trash'class="bi bi-trash-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

        
}

export default Cart;