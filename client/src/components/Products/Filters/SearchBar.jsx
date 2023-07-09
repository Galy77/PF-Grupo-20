import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { useState } from 'react';
import style from "../Products.module.css"

function SearchBar () {
    const [ input, setInput ] = useState("");

    const handleInput = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    

    return (
        <div className={style.searchBar}>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleInput}
                />
                <Link /*to={`/products?search=${}`}*/><Button variant="outline-success">Search</Button></Link>
            </Form>
        </div>
    )
}

export default SearchBar;