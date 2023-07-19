import "./payment.css"
const Failure = () => {
    return(
        <div class='pay-cont d-flex justify-content-center align-items-center'>
            <div class='payment failure d-flex align-items-center justify-content-center'>
                <span>No se pudo realizar el pago</span>
                <i class="bi bi-emoji-frown-fill"></i>
            </div>
        </div>
    )
}
export default Failure