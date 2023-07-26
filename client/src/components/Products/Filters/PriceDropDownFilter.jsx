import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { priceOrder } from '../../../redux/actions';
import style from "../Products.module.css";
function PriceDropDownFilter (props){
    const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch();

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option === 'Mayor') {
          dispatch(priceOrder(option))
        } else if (option === 'Menor') {
          dispatch(priceOrder(option))
        }
      };
    useEffect(()=> {
        setSelectedOption(null)
    },[props.reset])
    return (
        <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic" className={style.filter}>Precio</Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item
                    active={selectedOption === 'Mayor'}
                    onClick={() => handleOptionSelect('Mayor')}
                    >
                    Mayor</Dropdown.Item>
                    <Dropdown.Item
                    active={selectedOption === 'Menor'}
                    onClick={() => handleOptionSelect('Menor')}
                    >
                    Menor</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PriceDropDownFilter;