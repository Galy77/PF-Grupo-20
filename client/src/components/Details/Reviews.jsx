import { useEffect } from "react"
import Stars from "./Stars"
import axios from "axios"
const Reviews =  ({stars, coment, User, product, getReviews, id_user}) => {
    let user = ''

        console.log({1:User})
        console.log(product)

    if(User !== null){
        user = User.full_name
    }
    const deleteReview = async () => {
        try {
            await axios.delete(` http://localhost:3001/pf/review?id_product=${product.id}&id_user=${User.id}`)
            getReviews()
        } catch (error) {
            console.log(error)
        }
    }
    console.log({id_user:id_user,UserId:User})
    return(
        <div class='w-100 h-100 mb-4'>
            <div class='review h-100 d-flex mx-4 justify-content-between align-items-center border rounded'>
                <div class='d-flex flex-column mx-4'>
                    <i class=" bi bi-person-circle mx-3"></i>
                    <strong>{user}</strong>
                </div>
                <div class='py-2'>
                    <div class='d-flex justify-content-end p-1'>
                        <Stars rating={stars}/>
                    </div>
                    <div class='coment-container mb-2 d-flex align-items-center justify-content-center'>
                        <p>{coment}</p>
                    </div>
                    {
    // Check if the user is logged in and if the logged-in user's id matches the review's user id
    user && user.id === User.id && (
        <i onClick={deleteReview} class='removeComment'> Remove</i>
    )
}
                </div>
            </div>
        </div>
    )
}
export default Reviews