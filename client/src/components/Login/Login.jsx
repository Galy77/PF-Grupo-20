import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {Register} from "../Register/Register"
export function Login() {
  const { login, loginWithGoogle }= useAuth();
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [requiresCompletion, setRequiresCompletion] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber:"",
    direction_shipping:"",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      setError("");
      if (isGoogleLogin) {
        navigate("/");
      } else {
        window.history.go(-2);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      const requiresCompletion = await loginWithGoogle();
      setRequiresCompletion(requiresCompletion);
      setIsGoogleLogin(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      {error && <p>{error}</p>}

      {!isGoogleLogin && !requiresCompletion ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={handleChange}
              placeholder="youremail@company.tld"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={handleChange}
              placeholder="*************"
              required
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </form>
      ) : (
        <>
          <Register email={user.email} name={user.name} />
        </>
      )}


      {!isGoogleLogin ? (
        <>
          <button onClick={handleGoogleSignin} className="btn btn-secondary">
            <img src="googlelogo.png" alt="GoogleLogo" style={{ width: "30px", height: "30px" }}/>
            Iniciar sesión con Google
            <img src="googlelogo.png" alt="GoogleLogo" style={{ width: "30px", height: "30px" }}/>
          </button><p>
              ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
            </p>
        </>
      ):(
          <></>
      )}
    </div>
  );
}
