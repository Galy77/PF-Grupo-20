import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { priceOrder } from '../../../redux/actions';

function PriceDropDownFilter (){
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

    return (
        <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic">Precio</Dropdown.Toggle>
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