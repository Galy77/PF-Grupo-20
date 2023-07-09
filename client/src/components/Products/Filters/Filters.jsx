import Container from "react-bootstrap/esm/Container";
import style from "../Products.module.css";
import PriceFilter from "./PriceFilter";
import { useState } from "react";
import SearchBar from "./SearchBar";

function Filters (props) {
    return (
      <Container fluid className={style.filters}>
        <SearchBar />
        <PriceFilter />
      </Container>
    )
}

export default Filters;