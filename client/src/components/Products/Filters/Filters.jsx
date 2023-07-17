import Container from "react-bootstrap/esm/Container";
import style from "../Products.module.css";
import PriceFilter from "./PriceFilter";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RatingFilter from "./RatingFilter";
import "../producs.css"

function Filters (props) {
    return (
      <div class='mx-4' >
        <SearchBar />
        <PriceFilter />
        <RatingFilter />
      </div>
    )
}

export default Filters;