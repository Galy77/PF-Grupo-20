/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import './Register.style.css'

export function Register({ email, name }) {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    name: "" || name,
    email: "" || email,
    password: "",
    phoneNumber:"",
    direction_shipping:"",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password, user.name,user.phoneNumber,user.direction_shipping);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
       {error && <p> {error} </p>}

      <form onSubmit={handleSubmit}>
        <h1>Registrase</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={user.name}
            type="text"
            className="form-control"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Matias Nicolas Lanza"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={user.email}
            type="email"
            className="form-control"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={user.password}
            type="password"
            className="form-control"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="*************"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Numero de Telefono
          </label>
          <input
            value={user.phoneNumber}
            type="number"
            className="form-control"
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            placeholder="*************"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Direccion a entregar
          </label>
          <input
          value={user.direction_shipping}
            type="text"
            className="form-control"
            onChange={(e) => setUser({ ...user, direction_shipping: e.target.value })}
            placeholder="Calle 3 Casa 5"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p>
        Ya tienes una cuenta? <Link to="/login">iniciar Sesion</Link>
      </p>
    </div>
  );
}
