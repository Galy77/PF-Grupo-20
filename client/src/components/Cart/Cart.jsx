import "./Cart.css"
import CartCart from "./CartCard"
import { removeOrder } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addOrder } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const { user } = useAuth();
    const [isUser, setIsUser] = useState();
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    const products = useSelector(state => state.orders)
    const productosStorage = JSON.parse(localStorage.getItem("productos"))
    if(!products.length){
        if(productosStorage !== null) productosStorage.map(el => dispatch(addOrder(el)))
    }
    
    useEffect(() => {
        if(usuarioActual){
          setIsUser(usuarioActual);
        }else{
          setIsUser(user);
        }
      }, [user, usuarioActual]);
      
      if (!isUser) {
        navigate("/login");
        return null;
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
            ////MP
        // const [preferenceId, setPreferenceId] = useState(null)
        // initMercadoPago("TEST-3805efe2-4de0-416c-a67b-416a74b0d3f6")
        // const createPreference = async () => {
        //     try {
        //         const response = await axios.post("http://localhost:3001/PF/create_preference",{
        //             description:"cart Mercado Henry",
        //             price:total,
        //             quantity:1
        //             // currency_id:"ARS"
        //         })
        //         console.log(response)
        //         const {id} = response.data;
        //         console.log(id)
        //         return id
        //     } catch (error) {
        //         console.log(error)
        //         console.log(1)            
        //     }
        // }
        // const handleBuy = async () => {
        //     const id = await createPreference()
        //     if(id){
        //         setPreferenceId(id)
        //     }
        // }
        ////MP
    function goBack() {
        window.history.back();
    }
      


    return(
        <>
        <div>
            <i id="prev" class="bi bi-chevron-left d-flex" onClick={goBack}></i>
        </div>
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