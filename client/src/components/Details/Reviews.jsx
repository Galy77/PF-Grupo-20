import Stars from "./Stars"
const Reviews =  ({stars, coment}) => {
    return(
        <div class='w-100 h-50 mb-4'>
            <div class='h-100 d-flex mx-4 justify-content-between align-items-center border rounded'>
                <i class="stars bi bi-person-circle mx-3"></i>
                <div>
                    <div class='d-flex justify-content-end p-1'>
                        <Stars rating={stars}/>
                    </div>
                    <div class='coment-container mb-2'>
                        <p>{coment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews