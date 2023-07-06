const CartCart = () => {
    return(
        <>
            <div class="list-group-item d-flex">
                
                <img class='imgs-cart' src="https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a045mzkfaro/gallery/ar-galaxy-a04-sm-a045-sm-a045mzkfaro-534153898?$650_519_PNG$" alt="" />
                
                <div class='x-title d-flex flex-column'>

                    <div class='d-flex justify-content-end w-100'>
                        <i class="bi bi-x-square"></i>
                    </div>

                    <div id='title-price' class='d-flex flex-column justify-content-start'>
                        <span>Samsung Galaxy A24 128 Gb Silver 4 Gb Ram</span>
                        <div class='d-flex justify-content-end w-100'>
                           <span class='txt-medium price'>$1999</span>    
                        </div>
                        
                    </div>

                </div>
            
            </div>
        </>
    )
}
export default CartCart