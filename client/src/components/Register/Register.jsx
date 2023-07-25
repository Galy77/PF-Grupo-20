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
    } else if (!/^[\d\s()+-]+$/.test(input.phone)) {
      error.phone = "El número de teléfono solo puede contener números, guiones, espacios en blanco o paréntesis.";
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
              phone: "",
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
    <div className="register-container">
     
      <div className="register-form">
      <form onSubmit={handleSubmit}>
        <h1 className="register-title-h1-prop">Registrase</h1>
        <div className="mb-3">
          <label htmlFor="full_name" className="form-label">
            Nombre completo
          </label>
          <input
            name="full_name"
            value={input.full_name} 
            onChange={handleChange} 
            type="text"
            className="form-register-control"
            placeholder="Matias Nicolas Lanza"
          />
        </div>
        {error.full_name && <p className="error-inputs">{error.full_name}</p>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={input.email} 
            onChange={handleChange} 
            type="text"
            className="form-register-control"
            placeholder="youremail@company.tld"
          />
        </div>
        {error.email && <p className="error-inputs">{error.email}</p>}

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            name="password"
            value={input.password} 
            onChange={handleChange} 
            type="password"
            className="form-register-control"
            placeholder="*************"
          />
        </div>
        {error.password && <p className="error-inputs">{error.password}</p>}

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Numero de Telefono
          </label>
         <div>
            <input
              name="phone"
              value={input.phone} 
              onChange={handleChange} 
              type="text"
              className="form-register-control"
              placeholder="Ej: 266-445481"
            />
          </div>
          </div>
          
        {error.phone && <p className="error-inputs">{error.phone}</p>}

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Direccion
          </label>
          <input
            name="direction_shipping"
            value={input.direction_shipping} 
            onChange={handleChange} 
            type="text"
            className="form-register-control"
            placeholder="Calle 10 Dept. 15"
          />
        </div>
        {error.direction_shipping && <p className="error-inputs">{error.direction_shipping}</p>}
        <button type="submit" className="btn-register">
          Registrarse
        </button>
      </form>
      <p>
        Ya tienes una cuenta? <Link to="/login" className="linkR">iniciar Sesion</Link>
      </p>
      </div>
      
    </div>
  );
}
