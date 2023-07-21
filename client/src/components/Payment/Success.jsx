import { useEffect, useState } from "react"
import "./payment.css"
import axios from "axios";
const Success = () => {
    const data = JSON.parse(localStorage.getItem("setStockProduct"))
    const putStock = async () =>{
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
    const postPayment = async () =>{
        const user = JSON.parse(localStorage.getItem("usuarioActual"));
        if(data){
            if(data.length){
                // data.map(async el =>{
                //     const newStock = {
                //         stock:el.cantidad
                //     }
                //     const response = await axios.put(`http://localhost:3001/PF/products/${el.id}`,newStock)
                //     console.log(response)
                // })
            }else{
                const newPayment = {
                    id_user:user.id,
                    email:user.email,
                      amount:data.amount,
                        id_product:data.id
                }
                const response = await axios.post(`http://localhost:3001/PF/payment`,newPayment)
                console.log(response)
            }
            localStorage.removeItem('setStockProduct');
        }
    }
    useEffect(() => {
        putStock()
        postPayment()
    })

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