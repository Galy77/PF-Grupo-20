import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function Profile() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Perfil</h1>
        <h3>Nombre {user.displayName}</h3>
        <h3>Email {user.email}</h3>
        
        <button
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
    </div>
  );
}
export default Profile
