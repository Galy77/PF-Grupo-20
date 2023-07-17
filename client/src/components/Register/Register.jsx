/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.style.css'
import { addUser } from "../../redux/actions";
import {useDispatch} from  "react-redux"

export function Register() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    full_name: "",
    email: "",
    password: "",
    phone:"",
    direction_shipping:"",
  });

  const [error, setError] = useState({
    full_name: "",
    email: "",
    password: "",
    phone:"",
    direction_shipping:"",
  });

  
  const validate = (input) => {
    let error = {};

    if (input.full_name.trim().length === 0) {
      error.full_name = "Ingrese un nombre.";
    } else if (!/^[a-zA-Z\s]+$/.test(input.name)) {
      error.full_name = "El nombre solo debe contener letras y espacios.";
    } else if (input.full_name.trim().split(" ").length < 2) {
      error.full_name = "Ingrese un nombre y apellido.";
    }

    if (input.email.trim().length === 0) {
      error.email = "Ingrese un correo electrónico.";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      error.email = "Ingrese un correo electrónico válido.";
    }

    if (input.password.trim().length === 0) {
      error.password = "Ingrese una contraseña.";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
      error.password = "La contraseña debe contener al menos una mayúscula y un número.";
    }

    if (input.phone.trim().length === 0) {
      error.phone = "Ingrese un número de teléfono.";
    } else if (input.phone.trim().length < 5) {
      error.phone = "El número de teléfono debe tener al menos 5 dígitos.";
    }

    if (input.direction_shipping.trim().length === 0) {
      error.direction_shipping = "Ingrese una dirección de envío.";
    }

    return error;
  };
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
    
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value
      })
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      const newUser = { ...input };
      console.log("envio", newUser);
      dispatch(addUser(newUser))
        .then((res) => {
          console.log("respuesta: ", res);
          if (res) {
            alert("¡El usuario se registró exitosamente!");
            setInput({
              full_name: "",
              email: "",
              password: "",
              phoneNumber: "",
              direction_shipping: ""
            });
            navigate("/");
          }
        })
        .catch((error) => {
          alert("Error al agregar el usuario.");
          console.log(error);
        });
    } else {
      alert("Faltan datos.");
    }
  };

  return (
    <div className="container">
     

      <form onSubmit={handleSubmit}>
        <h1>Registrase</h1>
        <div className="mb-3">
          <label htmlFor="full_name" className="form-label">
            Nombre completo
          </label>
          <input
            name="full_name"
            value={input.full_name} 
            onChange={handleChange} 
            type="text"
            className="form-control"
            placeholder="Matias Nicolas Lanza"
          />
        </div>
        {error.full_name && <p>{error.full_name}</p>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={input.email} 
            onChange={handleChange} 
            type="text"
            className="form-control"
            placeholder="youremail@company.tld"
          />
        </div>
        {error.email && <p>{error.email}</p>}

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            name="password"
            value={input.password} 
            onChange={handleChange} 
            type="password"
            className="form-control"
            placeholder="*************"
          />
        </div>
        {error.password && <p>{error.password}</p>}

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Numero de Telefono
          </label>
          <input
            name="phone"
            value={input.phone} 
            onChange={handleChange} 
            type="text"
            className="form-control"
            placeholder="*************"
          />
        </div>
        {error.phoneNumber && <p>{error.phoneNumber}</p>}

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Direccion
          </label>
          <input
            name="direction_shipping"
            value={input.direction_shipping} 
            onChange={handleChange} 
            type="text"
            className="form-control"
            placeholder="Calle 3 Casa 5"
          />
        </div>
        {error.direction_shipping && <p>{error.direction_shipping}</p>}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p>
        Ya tienes una cuenta? <Link to="/login">iniciar Sesion</Link>
      </p>
    </div>
  );
}
