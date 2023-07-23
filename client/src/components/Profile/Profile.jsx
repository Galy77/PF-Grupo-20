/* eslint-disable no-mixed-spaces-and-tabs */
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { userLogout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./Profile.style.css";
import ShowModal from "../Modals/ShowModal/ShowModal";

export function Profile() {
  const dispatch = useDispatch();
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  const providerActual = localStorage.getItem("userProvider");
  const navigate = useNavigate();

  const { logout, user } = useAuth();
  const [isUser, setIsUser] = useState();
  const [loading, setLoading] = useState(true); 
  const [modalCompras, setModalCompras] = useState(false);
  const [modalPublicaciones, setModalPublicaciones] = useState(false);
  const [modalDatos, setModalDatos] = useState(true);

  useEffect(() => {
    if (usuarioActual) {
      setIsUser(usuarioActual);
      setLoading(false);
    } else {
      setIsUser(user);
      setLoading(false);
    }
  
  }, [usuarioActual,user]);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(userLogout());
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleModalClick = (modalName) => {
    setModalCompras(false);
    setModalPublicaciones(false);
    setModalDatos(false);

    switch (modalName) {
      case "compras":
        setModalCompras(true);
        break;
      case "publicaciones":
        setModalPublicaciones(true);
        break;
      case "datos":
        setModalDatos(true);
        break;
      default:
        break;
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }
  if(!loading){
    if (!isUser && !usuarioActual) {
      navigate("/login");
      return null;
    }
  }

  return (
    <div>
      {providerActual === "google" ? (
        <div className="profile-container">
          <div className="lateral-profile-container">
            <h1>{isUser.displayName}</h1>
            <h6>¡Bienvenido!</h6>
            <img src={user.photoURL} alt="UserImage" className="profile-image" />
            <button onClick={() => handleModalClick("compras")} className="btn-lateral">
              Compras
            </button>
            <button onClick={() => handleModalClick("publicaciones")} className="btn-lateral">
              Publicaciones
            </button>
            <button onClick={() => handleModalClick("datos")} className="btn-lateral">
              Mis Datos
            </button>

            <button className="btn-cerrar-sesion" onClick={handleLogout}>
              Cerrar Sesion
            </button>
          </div>
          <div className="central-profile-container">
            <ShowModal estadoShowModal={modalCompras}>
              <h1>Tus Compras</h1>
            </ShowModal>
            <ShowModal estadoShowModal={modalPublicaciones}>
              <h1>Tus Publicaciones</h1>
              <Link to="/create">
                <button className="btn-lateral">+ Añadir publicacion</button>
              </Link>
            </ShowModal>
            <ShowModal estadoShowModal={modalDatos}>
              <div>
                <h1>Tus Informacion</h1>
                <h2>{isUser.displayName}</h2>
                <h2>{isUser.email}</h2>
                <h2>Registrado mediante {providerActual}</h2>
              </div>
              <Link to="/register">
                <button className="btn-lateral">Completar registro</button>
              </Link>
            </ShowModal>
          </div>
        </div>
      ) : (
        <div className="profile-container">
          <div className="lateral-profile-container">
            <h1>{isUser.full_name}</h1>
            <button onClick={() => handleModalClick("compras")} className="btn-lateral">
              Compras
            </button>
            <button onClick={() => handleModalClick("publicaciones")} className="btn-lateral">
              Publicaciones
            </button>
            <button onClick={() => handleModalClick("datos")} className="btn-lateral">
              Mis Datos
            </button>

            <button className="btn-cerrar-sesion" onClick={handleLogout}>
              Cerrar Sesion
            </button>
          </div>
          <div className="central-profile-container">
            <ShowModal estadoShowModal={modalCompras}>
              <h1>TERRIBLE WENO PO CULIAO COMPRAS</h1>
            </ShowModal>
            <ShowModal estadoShowModal={modalPublicaciones}>
              <h1>Tus Publicaciones</h1>
              <Link to="/create">
                <button className="btn-lateral">+ Añadir publicacion</button>
              </Link>
            </ShowModal>
            <ShowModal estadoShowModal={modalDatos}>
              <div>
                <h1>{isUser.name}</h1>
                <h1>{isUser.email}</h1>
                <h1>{isUser.direction_shipping}</h1>
                <h1>{isUser.phone}</h1>
              </div>
              <Link to="/register">
                <button className="btn-lateral">Modificar Datos</button>
              </Link>
            </ShowModal>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
