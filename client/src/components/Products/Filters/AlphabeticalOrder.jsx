import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { alphabeticOrder } from '../../../redux/actions';
import style from "../Products.module.css";

function AlphabeticalOrder () {
    const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch();

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option === 'A-Z') {
            dispatch(alphabeticOrder(option))
        } else if (option === 'Z-A') {
            dispatch(alphabeticOrder(option))
        }
      };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic" className={style.filter}>Orden Alfabetico</Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item
                    active={selectedOption === 'A-Z'}
                    onClick={() => handleOptionSelect('A-Z')}
                    >A-Z</Dropdown.Item>
                    <Dropdown.Item
                    active={selectedOption === 'Z-A'}
                    onClick={() => handleOptionSelect('Z-A')}
                    >Z-A</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
    )
}

export default AlphabeticalOrder;