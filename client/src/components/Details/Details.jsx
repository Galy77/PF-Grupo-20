import "./style.css"
import Slider from "./Slider";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addOrder } from "../../redux/actions";

const Details = ({}) => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const products = useSelector(state => state.products);
    const product = products.filter(el => el.id == id).pop()

    const addCart = () => {
        dispatch(addOrder({...product,cant:1}))
    }
    return(
        <>
            <div class="container text-center">
                <div class="row">
                    <div class="col d-flex flex-column justify-content-start align-items-end">
                        <div className="product d-flex flex-column align-items-center">
                            <Slider images={product.image}/>
                        </div>
                        <div id='stock'class='d-flex justify-content-center w-100 align-items-end'>
                            <span class='text-little'>{product.stock} Unidades disponibles</span>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-start">

                        <div class="product-info d-flex flex-column align-items-center">
                            <div class='d-flex justify-content-evenly w-100 align-items-center'>
                                <div class='d-flex flex-column align-items-start  w-100 '>
                                    <Stars rating={product.rating}/>
                                </div>
                                <div>
                                    <i class="bi bi-heart"></i>
                                </div>
                            </div>
                            
                            <div id="title-description">
                                <h3 id='title'>{product.name}</h3>
                                <p>Lo que tenés que saber de este producto<span>{product.description}</span></p>
                            </div>
                            <div class='d-flex justify-content-end w-100 align-items-end'>
                                <div class="d-flex">
                                    <div id="btn">
                                        <Link to={`/cart`} onClick={addCart}>
                                            <button type="button" class="btn btn-info"  >
                                                Add to{` `}
                                                <i class="bi bi-cart3"></i>
                                            </button>
                                        </Link>    
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div class="comments-row">
                        <div>
                            <input class="" type="text" placeholder="add comment..."/>
                        </div>
                        <div>
                            <h2>Coments</h2>
                            <div class='stars'>
                                <h2>3.5</h2>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <i class="bi bi-star"></i>
                            </div>
                        </div>

                        <div>
                            <div class='stars'>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            <div><p>user <span>Excelente producto precio calidad</span></p></div>
                        </div>

                        <div>
                            <div class='stars'>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            <div><p>user<span>Excelente producto precio calidad</span></p></div>
                        </div>
                </div> */}
            </div>
        </>
    )
}

export default Details;