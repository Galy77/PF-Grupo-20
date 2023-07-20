import { useState } from "react"

const Stars = ({rating}) => {
    const integer = []
    const decimals = []
    const starVoid = []

    let decimal = rating%1
    let int = Math.floor(rating)
    if(decimal > 0.5) integer.push(1)
    for (let i = 0; i < int; i++) {
        integer.push(1)
    }


    if (decimal <= 0.5) int = int + 0.5
    else int = int + 1

    let starNul = Math.floor(5 - int)
    for (let i = 0; i < starNul; i++) {
        starVoid.push(1)
    }
    

    if(int%1 !== 0) decimals.push(1)

    //
    const handle = (num) => {
        console.log(num)
    }
    return(
        <>

        <div class='stars'>
            {
                integer.map(el => {
                    return <i class="stars cursor bi bi-star-fill"></i>
                })
            }
            {
                decimals.map(el => {
                    return<i class="stars cursor bi bi-star-half"></i>
                })
            }
            {
                starVoid.map(el => {
                    return<i class="stars cursor bi bi-star"></i>
                })
            }
        </div>

        </>
    )
}
export default Stars