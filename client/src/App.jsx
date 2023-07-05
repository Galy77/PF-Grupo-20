import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addOrder,addProduct,addUser,removeOrder,removeProduct,removeUser } from './redux/actions';


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

  const products = [
    {
      id: 1,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Teléfono inteligente",
      description: "Un teléfono móvil avanzado con funciones inteligentes.",
      price: 599.99,
      stock: 50,
      category: "Electrónica",
    },
    {
      id: 2,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Tableta",
      description: "Una tablet de alta calidad para entretenimiento y productividad.",
      price: 399.99,
      stock: 30,
      category: "Electrónica",
    },
    {
      id: 3,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Camiseta",
      description: "Una camiseta cómoda y de diseño moderno.",
      price: 19.99,
      stock: 100,
      category: "Ropa",
    },
    {
      id: 4,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Pantalones",
      description: "Pantalones elegantes y duraderos para cualquier ocasión.",
      price: 49.99,
      stock: 80,
      category: "Ropa",
    },

    {
      id: 5,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Mesa de comedor",
      description: "Una mesa espaciosa y elegante para compartir comidas en familia.",
      price: 299.99,
      stock: 20,
      category: "Hogar",
    },
    {
      id: 6,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Sofá",
      description: "Un sofá cómodo y de alta calidad para relajarse en el salón.",
      price: 599.99,
      stock: 10,
      category: "Hogar",
    },
    {
      id: 7,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Balón de fútbol",
      description: "Un balón oficial para practicar fútbol con amigos.",
      price: 29.99,
      stock: 50,
      category: "Deportes",
    },
    {
      id: 8,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Raqueta de tenis",
      description: "Una raqueta de tenis profesional para mejorar tu juego.",
      price: 89.99,
      stock: 20,
      category: "Deportes",
    },

    {
      id: 9,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "El Gran Gatsby",
      description: "Una novela clásica que retrata la decadencia de la sociedad.",
      price: 14.99,
      stock: 30,
      category: "Libros",
    },
    {
      id: 10,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7nCD5g-wQCtmqJUYs1TRg06XdYysjVStyTZTE6mmPNU2XADJk2PUYlgqYq-u5qVgTQ&usqp=CAU",
      name: "Cien años de soledad",
      description: "Una obra maestra de la literatura que narra la historia de una familia.",
      price: 19.99,
      stock: 15,
      category: "Libros",
    }
  ]

  useEffect(() => {
    try {
      dispatch(addUser(user1))
      dispatch(addProduct(products))
    } catch (error) {
      console.error('error al obtener los datos: ',error)
    }
  }, []);
  const a = () => {
    console.log(allProducts)
    console.log(user)
  }

  return (
    <div className="App">
      <button onClick={a}>a</button>
    </div>
  )
}

export default App
