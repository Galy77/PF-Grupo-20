/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.style.css";
import { addUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    direction_shipping: "",
  });

  const [error, setError] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    direction_shipping: "",
  });

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  const validate = (input) => {
    let error = {};

    if (input.full_name.trim().length === 0) {
      error.full_name = "Ingrese un nombre.";
    } else if (!/^[a-zA-Z\s]+$/.test(input.full_name.trim())) {
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
      error.password =
        "La contraseña debe contener al menos una mayúscula y un número.";
    }

    if (input.phone.trim().length === 0) {
      error.phone = "Ingrese un número de teléfono.";
    } else if (!/^[\d\s()+-]+$/.test(input.phone)) {
      error.phone = "Ingrese un número de teléfono válido.";
    }

    const inputDirectionShipping = input.direction_shipping
      .trim()
      .toLowerCase();
    const normalizedDirectionShipping = removeAccents(inputDirectionShipping);
    const validKeywords = [
      "calle",
      "departamento",
      "dpto",
      "barrio",
      "casa",
      "dpto",
    ];

    if (normalizedDirectionShipping.length === 0) {
      error.direction_shipping = "Ingrese una dirección de envío.";
    } else if (
      !validKeywords.some((keyword) =>
        normalizedDirectionShipping.includes(keyword)
      )
    ) {
      error.direction_shipping = "Ingrese una dirección de envío válida.";
    }
    return error;
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      const newUser = { ...input };

      dispatch(addUser(newUser)).then((res) => {
        if (res) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "¡El usuario se registró exitosamente!",
            showConfirmButton: false,
            timer: 2000,
          });
          setInput({
            full_name: "",
            email: "",
            password: "",
            phone: "",
            direction_shipping: "",
          });
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Este usuario ya esta registrado.",
            text: error.message,
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Faltan Datos.",
      });
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
          {error.direction_shipping && (
            <p className="error-inputs">{error.direction_shipping}</p>
          )}
          <hr className="espacio"></hr>
          {Object.keys(error).length === 0 ? (
            <button type="submit" className="btn-register">
              Registrarse
            </button>
          ) : (
            <button type="submit" className="btn-register-dis" disabled>
              Registrarse
            </button>
          )}
        </form>
        <p>
          Ya tienes una cuenta?{" "}
          <Link to="/login" className="linkR">
            iniciar Sesion
          </Link>
        </p>
      </div>
    </div>
  );
}
