import "./Cart.css"
import CartCart from "./CartCard"
const Cart = () => {
    return(
        <>
        <div class='Cart-Products d-flex'>


            <div id='cart-card'class="d-flex flex-column">
                <CartCart/>
                <CartCart/>
                <CartCart/>
                <CartCart/>
            </div>
            <div class='total-container d-flex flex-column justify-content-evenly align-items-center'>
                <span id='total'className="txt-large">TOTAL</span>
                <span class='txt-large'>$7996</span>
                <button id="pay">Pay</button>
                <i id='trash'class="bi bi-trash-fill"></i>
            </div>
        </div>
        </>
    )
}
export default Cart