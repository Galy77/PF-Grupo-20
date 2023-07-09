import { Link } from "react-router-dom"
import { removeOrder } from "../../redux/actions";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";

const CartCart = ({products}) => {
    const dispatch = useDispatch()
    const removeCart = () => {
        dispatch(removeOrder(products.id))
    }
    const [cartPersist, setCartPersist] = useState([])


    return(
        <>
            <div class="list-group-item d-flex">
                <Link to={`/detail/${products.id}`}>
                    <div class='x-title d-flex'>

                        <img class='imgs-cart' src={products.image} alt="" />

                        <div id='title-price' class='d-flex flex-column justify-content-start'>
                            <span>{products.name}</span>
                            <div class='d-flex justify-content-end w-100'>
                                <span class='txt-medium price'>{`$${products.price}`}</span>    
                            </div>
                            <div>
                                <span class='price'>{`por ${products.cant} unidades son $${Math.round(products.price*products.cant)}`}</span>    
                            </div>
                        </div>


                    </div>
                </Link>

                <div class='d-flex align-items-center'>
                        <i onClick={removeCart} class="bi bi-x-square"></i>
                </div>
            
            </div>
        </>
    )
}
export default CartCart