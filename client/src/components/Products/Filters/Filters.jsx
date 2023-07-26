import Container from "react-bootstrap/esm/Container";
import style from "../Products.module.css";
import PriceFilter from "./PriceFilter";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RatingFilter from "./RatingFilter";
import "../producs.css"
import AlphabeticalOrder from "./AlphabeticalOrder";
import PriceDropDownFilter from "./PriceDropDownFilter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { minimumPrice, maximumPrice, alphabeticOrder, priceOrder, showAll } from "../../../redux/actions";
function Filters ({category}) {

  const dispatch = useDispatch()
  const [ reset, setReset ] = useState(false);
  const resetFilter = () => {
    dispatch(minimumPrice(''))
    dispatch(maximumPrice(''))
    dispatch(alphabeticOrder('A-Z'))
    dispatch(priceOrder(''))
    dispatch(showAll('all'))
    setReset(!reset)
  }
    return (
      <div class='mx-4 filtersContainer my-4' >
        <h2 class='filter-title'>Filtros</h2>
        <SearchBar reset={reset}/>
        <PriceFilter reset={reset}/>
        <div class="subContainer">
          <AlphabeticalOrder reset={reset}/>
          <PriceDropDownFilter reset={reset}/>
          <RatingFilter reset={reset}/>
        </div>
        {
        category == undefined ? 
          <Link to={`/products`}>
            <button onClick={resetFilter} class='btn btn-dark'>restaurar</button>
          </Link>
          :
          <Link to={`/products/${category}?search=`}>
            <button onClick={resetFilter} class='btn btn-dark'>restaurar</button>
          </Link>
        }
      </div>
    )
}

export default Filters;