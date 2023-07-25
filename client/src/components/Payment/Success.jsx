import { useEffect, useState, useRef } from "react"
import "./payment.css"
import axios from "axios";
const Success = () => {
    const postPaymentExecutedRef = useRef(false);
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
        if (!postPaymentExecutedRef.current && data) {

            postPaymentExecutedRef.current = true;

        const user = JSON.parse(localStorage.getItem("usuarioActual"));
        console.log(`${user.id}`)
        if(data){

            if(data.length){
                data.map(async el =>{
                    const newPayment = {
                        id_user:user.id,
                        email:user.email,
                          amount:el.amount,
                            id_product:el.id
                    }
                    await axios.post(`http://localhost:3001/PF/payment`,newPayment)
                })
                const deleteCart = data.map(el => el.id) 
                const info = {productsToAdd:[],productsToRemove:deleteCart}
                await axios.put(`http://localhost:3001/PF/cart/${user.id}`,info)
            }else{

                const newPayment = {
                    id_user:user.id,
                    email:user.email,
                      amount:data.amount,
                        id_product:data.id
                }

                await axios.post(`http://localhost:3001/PF/payment`,newPayment)
                 
                const info = {productsToAdd:[],productsToRemove:[data.id]}
                await axios.put(`http://localhost:3001/PF/cart/${user.id}`,info)
            }
        }
    }}
    useEffect(() => {
        putStock();
      }, []);
    
      useEffect(() => {
        postPayment();
      }, []);


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