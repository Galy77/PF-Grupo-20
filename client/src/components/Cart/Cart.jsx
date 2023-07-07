import "./Cart.css"
import CartCart from "./CartCard"
import { removeOrder } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.orders)
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
        <Link to={'/detail/2'}>
            <div>detail/2</div>
        </Link>
        
        <div class='Cart-Products d-flex justify-content-evenly align-items-start'>


            <div id='cart-card'class="d-flex flex-column">
                {
                    products.map(products => {
                        return <CartCart products={products}/>
                    })
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