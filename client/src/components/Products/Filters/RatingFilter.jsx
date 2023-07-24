import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { betterQualified, showAll } from '../../../redux/actions';
import style from "../Products.module.css";
function RatingFilter () {
    const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch()
    
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option === 'betterQualified') {
          dispatch(betterQualified(option))
        } else if (option === 'all') {
          dispatch(showAll(option))
        }
      };

    return (
        <Dropdown >
            <Dropdown.Toggle variant="black" id="dropdown-basic" className={style.filter}>Rating</Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item
                    active={selectedOption === 'betterQualified'}
                    onClick={() => handleOptionSelect('betterQualified')}> 
                    Mejor Calificados</Dropdown.Item>
                    <Dropdown.Item value="all"
                    active={selectedOption === 'all'}
                    onClick={() => handleOptionSelect('all')}>
                    Todos</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
    )
}

export default RatingFilter;