import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { userLogout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export function Profile() {
  const dispatch = useDispatch();
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  const navigate = useNavigate();
  
  const { logout, user } = useAuth();
  const [isUser, setIsUser] = useState();
  const [isLoged,setIsLoged] = useState();

  useEffect(() => {
    if(usuarioActual){
      setIsUser(usuarioActual);
    }else{
      setIsUser(user);
    }
  }, [user, usuarioActual]);

  const handleLogout = async () => {
    try {
        await logout();
        dispatch(userLogout());
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
        <button onClick={handleLogout}>Cerrar Sesion</button>
      </div>
    </div>
  );
}

export default Profile;
