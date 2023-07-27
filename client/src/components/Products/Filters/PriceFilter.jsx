import { useState, useEffect } from 'react';
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
        if(value >= 0){
            setMinPrice(value)
        }
        
    }
    
    const handleMaxPrice = (e) => {
        const { value } = e.target;
        if(value >= 0){
            setMaxPrice(value)

        }
    }
    
    const handleOnClick = () => {
        dispatch(minimumPrice(minPrice))
        dispatch(maximumPrice(maxPrice))
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          dispatch(minimumPrice(minPrice))
          dispatch(maximumPrice(maxPrice))
        }
      };

    return (
        <InputGroup size='sm' >
            <InputGroup.Text class={style.precio}>Precio</InputGroup.Text>
            <Form.Control   

            aria-label="minimum"
            placeholder="Minimo"
            type='number'
            value={minPrice}
            onChange={handleMinPrice}
            onKeyPress={handleKeyPress}
            />
            <Form.Control
            aria-label="maximum"
            type='number'
            placeholder="Maximo"
            value={maxPrice}
            onChange={handleMaxPrice}
            onKeyPress={handleKeyPress}
            />
            <button variant="secondary" size="sm" class='btn border bg-white' onClick={() => handleOnClick()}>Aplicar</button>
        </InputGroup>
    )
}

export default PriceFilter;