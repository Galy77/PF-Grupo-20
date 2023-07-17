import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { connect, useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions"

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //const { loginWithGoogle, user } = useAuth();
  //const [requiresCompletion, setRequiresCompletion] = useState(false);

  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [error, setError] = useState("");

  const [ currentUser, setCurrentUser ] = useState({});
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  
  useEffect

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios(`http://localhost:3001/PF/user/bdd/?email=${user.email}&password=${user.password}`)
      console.log(res)
    } catch (error) {
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

    /*
      const handleGoogleSignin = async () => {
        try {
          const requiresCompletion = await loginWithGoogle();
          setCurrentUser(userFr)
          setRequiresCompletion(requiresCompletion);
          setIsGoogleLogin(true);
        } catch (error) {
          setError(error.message);
        }
      };
    */

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      {error && <p>{error}</p>}

      {!isGoogleLogin ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={user.email}
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
              value={user.password}
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
      ) : (
        <>
          <h1>Terminar el resgistro</h1>
          {console.log("datos que llegaron",user.email,"y",user.name)}
        </>
      )}

      

      {!isGoogleLogin ? (
        <>
          <button  className="btn btn-secondary">
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  null
)(Login)


