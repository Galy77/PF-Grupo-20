import Dropdown from 'react-bootstrap/Dropdown';
import style from "../Products.module.css"
import { useSelector } from 'react-redux';

function RatingFilter () {
    const products = useSelector(state => state.products)

    const handleChange= (event) => {

        const rating = event.target.value;
        let productsFiltered; 

        if (rating === "a") {
            return productsFiltered = products.sort((a, b) => a.rating - b.rating);
          } else if (rating === "d") {
            return productsFiltered = products.sort((a, b) => b.rating - a.rating);
          } else if (rating === "nn"){
            return productsFiltered;
          }
    }

    const handleClick=()=>{
        console.log("Click");
    }
    return (
        <Dropdown >
            <Dropdown.Toggle variant="black" id="dropdown-basic">Rating</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Mejor Calificados</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Todos</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
    )
}

export default RatingFilter;