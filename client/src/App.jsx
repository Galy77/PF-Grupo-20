import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react'
import { Routes,Route, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart';
import { addOrder,addProduct,addUser,removeOrder,removeProduct,removeUser } from './redux/actions';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/CategoryProducts/Products';
import SearchBarProducts from './components/Products/SearchBarProducts/SearchBarProducts';


function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const allProducts = useSelector(state => state.products)
  const user1 = {
    id:1,
    fullname:"Edwin Rodriguez Garcia",
    email:"a20edwin02@gmail.com",
    password:"12345678",
    phone:"2974265169",
    adrees:"Santa Cruz"
  }

  useEffect(() => {
    try {
      dispatch(addUser(user1))
      dispatch(addProduct(products))
    } catch (error) {
      console.error('error al obtener los datos: ',error)
    }
  }, []);

  const location = useLocation();

  return (
    <div className="App">
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
      </Routes>
    </div>
  )
}

export default App
