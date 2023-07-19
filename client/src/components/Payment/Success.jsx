import { useEffect } from "react"
import "./payment.css"
import axios from "axios";
const Success = () => {
const putStock = async () =>{

    const data = JSON.parse(localStorage.getItem("setStockProduct"))
    if(data){
        if(data.length){
            data.map(async el =>{
                const newStock = {
                    stock:el.cantidad
                }
                const response = await axios.put(`http://localhost:3001/PF/products/${el.id}`,newStock)
                console.log(response)
            })
        }else{
            const newStock = {
                stock:data.cantidad
            }
            const response = await axios.put(`http://localhost:3001/PF/products/${data.id}`,newStock)
            console.log(response)
        }
        localStorage.removeItem('setStockProduct');
    }
}
    useEffect(() => {
        putStock()
    },[])
    return(
        <div class='pay-cont d-flex justify-content-center align-items-center'>
            <div class='payment success d-flex align-items-center justify-content-center'>
                <span>Pago realizado Correctamente</span>
                <i class="bi bi-emoji-laughing-fill"></i>
            </div>
        </div>
    )
}
export default Success