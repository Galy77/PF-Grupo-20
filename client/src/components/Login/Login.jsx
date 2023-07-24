import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { useDispatch } from "react-redux";
import { getUser,addFirebaseUser } from "../../redux/actions"

import "./Login.style.css"
export function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

  const { loginWithGoogle} = useAuth();
  const [ error, setError ] = useState("");
  const [ currentUser, setCurrentUser ] = useState({});

  const [cUser, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    if (usuarioActual) {
      navigate("/");
    }else{
      navigate("/login");
    }
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(getUser(cUser));
      navigate("/");
    } catch (error) {
      alert("Autenticación fallida");
      setError(error.message);
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };



  const handleGoogleSignin = async () => {
    try {
      const response = await loginWithGoogle();
      console.log("este es mi user de google: ", response)
      try {
        dispatch(addFirebaseUser(response));
        if(usuarioActual){
          console.log("Action terminada",usuarioActual)
        if(usuarioActual.password === usuarioActual.password){
            setCurrentUser(usuarioActual)
          }
        }
      } catch (error) {
        setError(error.message);
      }
      navigate("/")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="body-login">
      <div className="login-container">
        <div className="login-div">
          <h1>Iniciar Sesión</h1>
          {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>

              <div className="div-inputs">
                <label htmlFor="email" className="lbl-title">
                  Email
                </label>
                <input
                  value={cUser.email}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="youremail@company.com"
                  
                />
              </div>

              <div className="div-inputs">
                <label htmlFor="password" className="lbl-title">
                  Contraseña
                </label>
                <input
                  value={cUser.password}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="*************"
                />
              </div>

              <div>
                <button type="submit" className="btn-is">
                  Iniciar sesión
                </button>
              </div>
            </form>

            <button onClick={handleGoogleSignin} className="btn-is-google">
              <img src="googlelogo.png" alt="GoogleLogo" style={{ width: "30px", height: "30px" }}/>
                Iniciar sesión con Google
              <img src="googlelogo.png" alt="GoogleLogo" style={{ width: "30px", height: "30px" }}/>
            </button><p>¿No tienes una cuenta? <Link className="link" to="/register">Regístrate</Link></p>
          
        </div>

        <div className="login-image-div">
        </div>
      </div>
    </div> 
  );
}