import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { useState } from 'react';
import style from "../Products.module.css"
import { useLocation } from 'react-router-dom';

function SearchBar () {
    const [ input, setInput ] = useState("");
    const location = useLocation();

    const category = location.pathname.slice(10);

    const handleInput = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const capital = input.charAt(0).toUpperCase() + input.slice(1);
    
    return (
        <div className={style.searchBar}>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                onChange={handleInput}
                />
                <Link to={`/products/${category}?search=${capital}`}><button variant="outline-dark" class='btn border bg-white'>Buscar</button></Link>
            </Form>
        </div>
    )
}

export default SearchBar;