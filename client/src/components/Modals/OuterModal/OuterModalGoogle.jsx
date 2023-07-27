/* eslint-disable react/prop-types */
import "./OuterModal.style.css"
import { useEffect, useState } from "react";
import { useDispatch } from  "react-redux"
import { modifyFirebaseUser } from "../../../redux/actions";
import Swal from 'sweetalert2'
function OuterModalGoogle ({children,estadoOuterModal,setEstadoOuterModal,datosUserGoogle}){
    const dispatch = useDispatch();
    useEffect(()=>{
      console.log("outer",datosUserGoogle)
    })
    const [input, setInput] = useState({
        phone: datosUserGoogle?.phone || "",
        direction_shipping: datosUserGoogle?.direction_shipping || "",
      });
    
      const [error, setError] = useState({
        phone: "",
        direction_shipping: "",
      });
  
    const validate = (input) => {
      let error = {};
      
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
      console.log("estas son mis entradas",input)
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
        const modifiedUser = {
          ...input,
          id:datosUserGoogle.id
        };
        console.log("modificaciones", modifiedUser);
        dispatch(modifyFirebaseUser(modifiedUser))
        .then((res) => {
          console.log("respuesta: ", res);
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '¡Datos modificados exitosamente!',
              showConfirmButton: false,
              timer: 2000
            })

            setInput({
              phone: input.phone,
              direction_shipping: input.direction_shipping
            });
            
            setTimeout(() => {
              window.location.reload();
            }, 1800);
            
          }
        })
        } else {
          Swal.fire({
            icon: 'warning',
            title:"No hay datos modificados."
          });
        }
    }
    return (
        <>
          {estadoOuterModal && (
            <div className="Outer-Overlay">
              <div className="Outer-ContenedorModal">
                <form onSubmit={handleSubmit}>
                  <h1 className="register-title-h1-prop">Modificar Perfil</h1>
    
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
                    Modificar
                  </button>
                </form>
                <button className="Outer-BotonCerrar" onClick={() => setEstadoOuterModal(false)}>X</button>
                {children}
              </div>
            </div>
          )}
        </>
      );
}
export default OuterModalGoogle