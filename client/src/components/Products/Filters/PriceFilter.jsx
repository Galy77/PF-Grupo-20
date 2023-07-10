import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { maximumPrice, minimumPrice } from '../../../redux/actions';
import style from "../Products.module.css";

function PriceFilter (props){
    const dispatch = useDispatch()
    const [ minPrice, setMinPrice ] = useState("");
    const [ maxPrice, setMaxPrice ] = useState("");

    const handleMinPrice = (e) => {
        const { value } = e.target;
        setMinPrice(value)
    }
    
    const handleMaxPrice = (e) => {
        const { value } = e.target;
        setMaxPrice(value)
    }
    
    const handleOnClick = () => {
        dispatch(minimumPrice(minPrice))
        dispatch(maximumPrice(maxPrice))
    }

    return (
        <InputGroup size='sm' >
            <InputGroup.Text>Precio</InputGroup.Text>
            <Form.Control   
            aria-label="minimum"
            placeholder="Minimo"
            value={minPrice}
            onChange={handleMinPrice}
            />
            <Form.Control 
            aria-label="maximum" 
            placeholder="Maximo"
            value={maxPrice}
            onChange={handleMaxPrice}
            />
            <Button variant="secondary" size="sm" onClick={() => handleOnClick()}>Aplicar</Button>
        </InputGroup>
    )
}

export default PriceFilter;