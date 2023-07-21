import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart';
import Success from './components/Payment/Success';
import Failure from './components/Payment/Failure';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Create from './components/Create/Create'
import Products from './components/Products/CategoryProducts/Products';
import SearchBarProducts from './components/Products/SearchBarProducts/SearchBarProducts';

import Profile from './components/Profile/Profile'
import { AuthProvider } from "./context/AuthContext";
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,100&display=swap" rel="stylesheet"/>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={ <Home/> } />
          <Route path='/home' element={ <Home/> }/>
          <Route path='/products/:category' element={ <Products/> }/>
          <Route path='/products' element={ <SearchBarProducts /> } />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element= { <Details/> } />
          <Route path='/cart' element={  <Cart/>  }/>
          <Route path='/Success' element={<Success/>}/>
          <Route path='/Failure' element={<Failure/>}/>
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element = {<Register/>} />
          <Route path='/create' element={ <Create/> }/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App