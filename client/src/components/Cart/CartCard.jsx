const CartCart = ({products}) => {
    return(
        <>
            <div class="list-group-item d-flex">
                
                <img class='imgs-cart' src={products.image} alt="" />
                
                <div class='x-title d-flex flex-column'>

                    <div class='d-flex justify-content-end w-100'>
                        <i class="bi bi-x-square"></i>
                    </div>

                    <div id='title-price' class='d-flex flex-column justify-content-start'>
                        <span>{products.name}</span>
                        <div class='d-flex justify-content-end w-100'>
                           <span class='txt-medium price'>{`$${products.price}`}</span>    
                        </div>
                        
                    </div>

                </div>
            
            </div>
        </>
    )
}
export default CartCart