import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { setMinPrice } from '../../../redux/actions';

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
    
    const handleClick = () => {
            dispatch(setMinPrice(minPrice()))
    }

   
    return (
        <InputGroup className="mb-3">
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
            <Button variant="secondary" size="sm" onClick={handleClick}>Aplicar</Button>
        </InputGroup>
    )
}

export default PriceFilter;