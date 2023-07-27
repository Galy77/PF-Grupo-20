/* eslint-disable react/prop-types */
import "./OuterModal.style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyUser } from "../../../redux/actions";
import Swal from "sweetalert2";
function OuterModal({
  children,
  estadoOuterModal,
  setEstadoOuterModal,
  datosUser,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    full_name: datosUser?.full_name || "",
    password: datosUser?.password || "",
    phone: datosUser?.phone || "",
    direction_shipping: datosUser?.direction_shipping || "",
  });

  const [error, setError] = useState({
    full_name: "",
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

    if (input.password.trim().length === 0) {
      error.password = "Ingrese una contraseña.";
    } else if (input.password.trim().length < 8) {
      error.password = "La contraseña debe tener al menos 8 caracteres.";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
      error.password =
        "La contraseña debe contener al menos una mayúscula y un número.";
    }

    if (input.phone.trim().length === 0) {
      error.phone = "Ingrese un número de teléfono.";
    } else if (!/^[\d\s()+-]+$/.test(input.phone)) {
      error.phone =
        "El número de teléfono invalido.";
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
      const modifiedUser = {
        ...input,
        id: datosUser?.id || null,
      };

      dispatch(modifyUser(modifiedUser)).then((res) => {
        if (res) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Datos modificados exitosamente!",
            showConfirmButton: false,
            timer: 2000,
          });

          setInput({
            full_name: input.full_name,

            password: input.password,
            phone: input.phone,
            direction_shipping: input.direction_shipping,
          });

          setTimeout(() => {
            window.location.reload();
          }, 1800);
        }
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "No hay datos modificados.",
      });
    }
  };
  return (
    <>
      {estadoOuterModal && (
        <div className="Outer-Overlay">
          <div className="Outer-ContenedorModal">
            <form onSubmit={handleSubmit}>
              <h1 className="register-title-h1-prop">Modificar Perfil</h1>
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
              {error.full_name && (
                <p className="error-inputs">{error.full_name}</p>
              )}

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
              {error.password && (
                <p className="error-inputs">{error.password}</p>
              )}

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

              <button type="submit" className="btn-register">
                Modificar
              </button>
            </form>
            <button
              className="Outer-BotonCerrar"
              onClick={() => setEstadoOuterModal(false)}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
export default OuterModal;
