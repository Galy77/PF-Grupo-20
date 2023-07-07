import "./Cart.css"
import CartCart from "./CartCard"
import { removeOrder } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.orders)
    const deleteCart = () => {
        products.map(el => dispatch(removeOrder(el.id)))
    }

    let total = products.map(el => el.price)

    total = total.reduce(function(acc, numero) {
        return acc + numero;
      }, 0);



    return(
        <>
        <Link to={'/home'}>
            <div>home</div>
        </Link>
        
        <div class='Cart-Products d-flex'>


            <div id='cart-card'class="d-flex flex-column">
                {
                    products.map(products => {
                        return <Link to={`/detail/${products.id}`}>
                            <CartCart products={products}/>
                        </Link> 
                    })
                }

            </div>
            <div class='total-container d-flex flex-column justify-content-evenly align-items-center'>
                <span id='total'className="txt-large">TOTAL</span>
                <span class='txt-large'>{`$${total}`}</span>
                <button id="pay">Pay</button>
                <i onClick={deleteCart} id='trash'class="bi bi-trash-fill"></i>
            </div>
        </div>
        </>
    )
}
export default Cart