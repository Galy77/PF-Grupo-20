import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { useDispatch, useSelector } from "react-redux";
import { getUser,addFirebaseUser } from "../../redux/actions"

export function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginWithGoogle} = useAuth();
  const [ error, setError ] = useState("");
  const [ currentUser, setCurrentUser ] = useState({});
  const [cUser, setUser] = useState({
    email: "",
    password: ""
  });

  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(getUser(cUser));
      console.log("HANDLE SEND",cUser)
      if(usuarioActual){
        console.log("Action terminada",usuarioActual)
        if(usuarioActual.password === usuarioActual.password){
          setCurrentUser(usuarioActual)
          navigate("/");
        }
      }
    } catch (error) {
      alert("Autenticacion fallida")
      setError(error.message);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("handleChange entry",name,value)
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
    <div className="container">
      <h1>Iniciar Sesión</h1>
      {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
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

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
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

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </form>

        <button className="btn btn-secondary" onClick={handleGoogleSignin}>
          <img src="googlelogo.png" alt="GoogleLogo" style={{ width: "30px", height: "30px" }}/>
            Iniciar sesión con Google
          <img src="googlelogo.png" alt="GoogleLogo" style={{ width: "30px", height: "30px" }}/>
        </button><p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>

    </div>
  );
}