import Container from "react-bootstrap/esm/Container";
import style from "../Products.module.css";
import PriceFilter from "./PriceFilter";
import { useState } from "react";

function Filters (props) {
    return (
      <Container fluid className={style.filters}>
        <PriceFilter />
      </Container>
    )
}

export default Filters;