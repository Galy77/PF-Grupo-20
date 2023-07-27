/* eslint-disable no-mixed-spaces-and-tabs */
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { userLogout, getPaymentsById, getProductById } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./Profile.style.css";
import ShowModal from "../Modals/ShowModal/ShowModal";
import OuterModal from "../Modals/OuterModal/OuterModal";
import Swal from "sweetalert2";
import OuterModalGoogle from "../Modals/OuterModal/OuterModalGoogle";
import OuterPhotoChange from "../Modals/CambioFotoPeril/OuterPhotoChange";

export function Profile() {
  const dispatch = useDispatch();
  const allPayments = useSelector((state) => state.payments);
  const allProducts = useSelector((state) => state.productsArray);
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  const providerActual = localStorage.getItem("userProvider");
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const [isUser, setIsUser] = useState();
  const [loading, setLoading] = useState(true);
  const [modalCompras, setModalCompras] = useState(false);

  const [modalPublicaciones, setModalPublicaciones] = useState(false);
  const [modalDatos, setModalDatos] = useState(true);
  const [modificarDatos, setModificarDatos] = useState(false);
  const [modificarFoto, setModificarFoto] = useState(false);

  const [AllPaymentsData,setAllPaymentsData] = useState([]);

  useEffect(() => {
    clearData();
    if (usuarioActual) {
      setIsUser(usuarioActual);
      setLoading(false);
      dispatch(getPaymentsById(usuarioActual.id));
    } else {
      setIsUser(user);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (allPayments && allPayments.length > 0) {
      const fetchProducts = async () => {
        const mappedPaymentsData = await Promise.all(
          allPayments.map(async (payment) => {
            const product = await dispatch(getProductById(payment.id_product));
            return product;
          })
        );
        setAllPaymentsData(mappedPaymentsData);
      };
      fetchProducts();
    }
  }, [allPayments, dispatch]);

  useEffect(() => {
    if (AllPaymentsData.length > 0) {
      // Lógica a realizar cuando AllPaymentsData tiene datos
      console.log("AllPaymentsData tiene datos:");
      // Puedes hacer cualquier otra operación o mostrar contenido dinámico aquí
    }
  }, [AllPaymentsData]);


  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, cerrar sesión",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await logout();
        dispatch(userLogout());
        navigate("/");

        Swal.fire({ 
          width:'20em',
          title:'Has cerrado sesión correctamente.',
          icon:'success',
          timer:1200,
          timerProgressBar:true,
          showConfirmButton: false
        }
        );
      }
      clearData(); 

    } catch (error) {
      console.error(error.message);
    }
  };
  const clearData = () => {
    setAllPaymentsData([]); // Limpiar los datos de compras u otros datos que desees vaciar
    // Limpiar otros estados locales si es necesario
  };
  
  const handleModalClick = (modalName) => {
    setModalCompras(false);

    setModalDatos(false);

    switch (modalName) {
      case "compras":
        setModalCompras(true);
        break;
      case "datos":
        setModalDatos(true);
        break;
      default:
        break;
    }
  };

  if (loading) {
    return <div>Cargando usuario...</div>;
  }

  if (!loading) {
    if (!isUser && !usuarioActual) {
      navigate("/login");
      return null;
    }
  }

  return (
    <div>
      {providerActual === "google" && (isUser || usuarioActual) ? (
        <div className="profile-container">
          <div className="lateral-profile-container">
            <h6>¡Bienvenido!</h6>
            <h1>{isUser.name || isUser.displayName}</h1>
            <div className="image-container-google">
              <img src={isUser.image} alt="" className="profile-image" />
            </div>
            <button
              onClick={() => handleModalClick("compras")}
              className="btn-lateral"
            >
              Compras
            </button>

            <button
              onClick={() => handleModalClick("datos")}
              className="btn-lateral"
            >
              Mis Datos

            </button>

            <button className="btn-cerrar-sesion" onClick={handleLogout}>
              Cerrar Sesion
            </button>
          </div>
          <div className="central-profile-container">
            <ShowModal estadoShowModal={modalCompras}>
              <h1>Compras</h1>
            </ShowModal>
            
            <ShowModal estadoShowModal={modalDatos}>
              <div>
                <h1>Tu Datos</h1>
                <h5>{isUser.displayName}</h5>
                <h5>{isUser.email}</h5>
                <h5>{isUser.phone}</h5>
                <h5>{isUser.direction_shipping}</h5>
                <button
                  onClick={() => setModificarDatos(!modificarDatos)}
                  className="btn-lateral"
                >
                  Modificar Datos
                </button>
              </div>
              <OuterModalGoogle
                estadoOuterModal={modificarDatos}
                setEstadoOuterModal={setModificarDatos}
                datosUserGoogle={isUser}
              />
            </ShowModal>
          </div>
        </div>
      ) : (
        <div className="profile-container">
          <div className="lateral-profile-container">
            <h6>¡Bienvenido!</h6>
            <h1>{isUser.full_name}</h1>
            <div className="image-container">
              <img
                src={isUser.image === null ? "fondo-login2.jpg" : isUser.image}
                alt="login"
                className="profile-image"
              />
              <div
                className="modify-button"
                onClick={() => setModificarFoto(!modificarFoto)}
              >
                Modificar
              </div>
            </div>

            <button
              onClick={() => handleModalClick("compras")}
              className="btn-lateral"
            >
              Compras
            </button>

            <button
              onClick={() => handleModalClick("datos")}
              className="btn-lateral"
            >

              Mis Datos
            </button>
            {isUser.role === 2 && (

  <a href="https://pf-dashboard-admin.vercel.app/" className="btn-lateral">Dashboard</a>
)}


            <button className="btn-cerrar-sesion" onClick={handleLogout}>
              Cerrar Sesion
            </button>
          </div>
          <div className="central-profile-container">
            <ShowModal estadoShowModal={modalCompras}>

            <div className="containers-profile">
              <h1>Tus Compras</h1>
              {AllPaymentsData.length > 0 ? (
                AllPaymentsData.map((item) => (
                  <div key={item.payload.id} className="producContainerProfile">
                    <div><img src={item.payload.image} className="profile-image-product"/></div>
                    <div className="profile-name-product">{item.payload.name}</div>
                    <div className="profile-price-product">{item.payload.price}$</div>
                  </div>
                ))
              ) : (
                <p>No hay compras recientes.</p>
              )}
            </div>


            </ShowModal>
            <ShowModal estadoShowModal={modalDatos}>
              <div>
                <h1>Tu Informacion</h1>
                <h5>{isUser.name}</h5>
                <h5>{isUser.email}</h5>
                <h5>{isUser.direction_shipping}</h5>
                <h5>{isUser.phone}</h5>
              </div>
              <button
                onClick={() => setModificarDatos(!modificarDatos)}
                className="btn-lateral"
              >
                Modificar Datos
              </button>
            </ShowModal>
            <OuterModal
              estadoOuterModal={modificarDatos}
              setEstadoOuterModal={setModificarDatos}
              datosUser={isUser}
            />
            <OuterPhotoChange
              estadoPhotoModal={modificarFoto}
              setEstadoPhotoModal={setModificarFoto}
              datosUser={isUser}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
