import Container from "react-bootstrap/esm/Container";
import style from "../Products.module.css";
import PriceFilter from "./PriceFilter";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RatingFilter from "./RatingFilter";
import "../producs.css"
import AlphabeticalOrder from "./AlphabeticalOrder";
import PriceDropDownFilter from "./PriceDropDownFilter";

function Filters (props) {
    return (
      <div class='mx-4 filtersContainer my-4' >
        <h2 class='filter-title'>Filtros</h2>
        <SearchBar />
        <PriceFilter />
        <div class="subContainer">
          <AlphabeticalOrder />
          <PriceDropDownFilter />
          <RatingFilter />
        </div>
      </div>
    )
}

export default Filters;