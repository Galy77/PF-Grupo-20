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
      <div class='mx-4 filtersContainer' >
        <div class="subContainer">
          <AlphabeticalOrder />
          <PriceDropDownFilter />
          <RatingFilter />
        </div>
        <SearchBar search={props.search}/>
        <PriceFilter />
      </div>
    )
}

export default Filters;