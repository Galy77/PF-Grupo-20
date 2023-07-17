import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { userLogout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export function Profile() {
  const dispatch = useDispatch();
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  const navigate = useNavigate();
  
  const { logout, userFr } = useAuth();
  const [isUser, setIsUser] = useState();

  useEffect(() => {
    setIsUser(userFr || usuarioActual);
  }, [userFr, usuarioActual]);

  const handleLogout = async () => {
    try {
      if (!isUser) {
        await logout();
      } else {
        dispatch(userLogout());
      }
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!isUser) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <div>
        <h1>Perfil</h1>
        <h3>Nombre {isUser.full_name}</h3>
        <h3>Email {isUser.email}</h3>
        <h3>Telefono {isUser.phone}</h3>
        <h3>Direccion {isUser.direction_shipping}</h3>
        <button onClick={handleLogout}>Cerrar Sesion</button>
      </div>
    </div>
  );
}

export default Profile;
