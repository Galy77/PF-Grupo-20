/* eslint-disable react/prop-types */
import "./OuterModal.style.css"
import { useState } from "react";
import { useDispatch } from  "react-redux"
import { modifyUser } from "../../../redux/actions";
import Swal from 'sweetalert2'
function OuterPhotoChange ({children,estadoOuterModal,setEstadoOuterModal,datosUser}){
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        image: datosUser?.image || ""
      });
    
      const [error, setError] = useState({
        image: ""
      });
  
    const validate = (input) => {
      let error = {};
  
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
        const modifiedUser = {
          ...input,
          id: datosUser?.id || null,
        };
        console.log("modificaciones", modifiedUser);
        dispatch(modifyUser(modifiedUser))
        .then((res) => {
          console.log("respuesta: ", res);
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: '¡Foto de perfil actulizada!',
              showConfirmButton: false,
              timer: 2000
            })

            setInput({
              image: input.image
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
                    <label htmlFor="full_name" className="form-label">
                      Cambiar foto de perfil
                    </label>
                    <input
                      name="full_name"
                      value={input.image}
                      onChange={handleChange}
                      type="text"
                      className="form-register-control"
                    />
                  </div>
                  {error.image && <p className="error-inputs">{error.image}</p>}
                  
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
export default OuterPhotoChange