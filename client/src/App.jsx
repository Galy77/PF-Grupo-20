import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Create from './components/Create/Create'
import Products from './components/Products/CategoryProducts/Products';
import SearchBarProducts from './components/Products/SearchBarProducts/SearchBarProducts';
import Profile from './components/Profile/Profile'
import { AuthProvider } from "./context/AuthContext";
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={ <Home/> } />
          <Route path='/home' element={ <Home/> }/>
          <Route path='/products/:category' element={ <Products/> }/>
          <Route path='/products' element={ <SearchBarProducts /> } />
          <Route path='/detail/:id' element= { <Details/> } />
          <Route path='/cart' element={  <Cart/>  }/>
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
