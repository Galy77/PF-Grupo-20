/* eslint-disable react/prop-types */
import "./OuterPhotoChange.style.css"
import { useState } from "react";
import { useDispatch } from  "react-redux"
import { modifyUserPhoto } from "../../../redux/actions";
import Swal from 'sweetalert2'
function OuterPhotoChange ({estadoPhotoModal,setEstadoPhotoModal,datosUser}){
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        image: datosUser?.image || null
      });
    
      const [error, setError] = useState({
        image: ""
      });
  
    const validate = (input) => {
      let error = {};
      if(input.image === null){
        error.image = "Ingrese una Imagen.";
      }
      return error;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (Object.keys(error).length === 0) {
        const modifiedUser = {
          ...input,
          id: datosUser?.id || null,
        };
         dispatch(modifyUserPhoto(modifiedUser))
         .then((res) => {

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
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setInput({
        ...input,
        image: file,
      });
  
      setError(
        validate({
          ...input,
          image: file,
        })
      );
    };
    return (
        <>
          {estadoPhotoModal && (
            <div className="Outer-Overlay">
              <div className="Outer-ContenedorModal">
                <form onSubmit={handleSubmit}>
                  <h1 className="register-title-h1-prop">Modificar Perfil</h1>
                  <div className="mb-3">
                    <label htmlFor="full_name" className="form-label">
                      Cambiar foto de perfil
                    </label>
                    <input type="file" name="image" onChange={handleImageChange} accept="image/*" />
                  </div>
                  {error.image && <p className="error-inputs">{error.image}</p>}
                  
                  <button type="submit" className="btn-register">
                    Modificar
                  </button>
                </form>
                <button className="Outer-BotonCerrar" onClick={() => setEstadoPhotoModal(false)}>X</button>
              </div>
            </div>
          )}
        </>
      );
}
export default OuterPhotoChange