import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react'
import { Routes,Route, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addOrder,addProduct,addUser,removeOrder,removeProduct,removeUser } from './redux/actions';
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Create from './components/Create/Create'
import Products from './components/Products/CategoryProducts/Products';
import SearchBarProducts from './components/Products/SearchBarProducts/SearchBarProducts';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,100&display=swap" rel="stylesheet"/>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/products/:category' element={<Products />}/>
        <Route path='/products' element={<SearchBarProducts />} />
        <Route path='/detail/:id' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login'/>
        <Route path='/register'/> 
        <Route path='/create' element={ <Create /> }/>
      </Routes>
    </div>
  )
}

export default App
