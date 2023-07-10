import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
function RatingFilter () {
    const products = useSelector(state => state.products)

    const handleChange=(event)=>{

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
        <div onChange={handleChange}>
            <select placeholder="Ordenar por...">
                <option value="nn">Ordenar por...</option>
                <option value="a">Mejor Calificadoes</option>
                <option value="d">Peor Calificados</option>
            </select>
            <Button variant="secondary" size="sm" onClick={handleClick}>Aplicar</Button>
        </div>
    )
}
export default RatingFilter;