import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { Link, useNavigate  } from "react-router-dom"
import { useEffect, useState } from 'react';

import style from "../Products.module.css"
import { useLocation } from 'react-router-dom';

function SearchBar (props) {
    const [ input, setInput ] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const category = location.pathname.slice(10);

    const handleInput = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const capital = input.charAt(0).toUpperCase() + input.slice(1);


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          const searchUrl = capital.length > 0 ? `/products/${category}?search=${capital}` : category ? `/products/${category}` : `/products/?search=${props.search}`;
          navigate(searchUrl);
        }
      };
    

    return (
        <div className={style.searchBar}>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Buscar"
                value={input}
                className="me-2"
                aria-label="Search"
                onChange={handleInput}
                onKeyPress={input !== undefined && handleKeyPress}
                />

                <Link to={`/products/${category}?search=${capital}`}><button variant="outline-dark" class='btn border bg-white'>Buscar</button></Link>

            </Form>
        </div>
    )
}

export default SearchBar;