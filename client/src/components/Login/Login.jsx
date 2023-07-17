import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions"

export function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usuarioLogeado = useSelector((state)=>state.user);

  const { loginWithGoogle,userFr }= useAuth();
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [requiresCompletion, setRequiresCompletion] = useState(false);
  const [error, setError] = useState("");
  const [currentUser,setCurrentUser] = useState({});
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  useEffect(()=>{
    //if(usuarioActual){
      //setCurrentUser(usuarioLogeado)
    //}
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(getUser(user));
      if(usuarioLogeado){
        if(usuarioLogeado.password === user.password){
          setCurrentUser(usuarioLogeado)
        }
      }
      navigate("/")
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  /*const handleGoogleSignin = async () => {
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


