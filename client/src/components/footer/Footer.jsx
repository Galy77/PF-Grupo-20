import "./Footer.css"
import { Link } from "react-router-dom"
const Footer = () => {


    const mostrarVentana = () => {
        const ventanaEmergente = document.getElementById('miVentana');
        ventanaEmergente.style.display = 'block';
        console.log(1)
      }
      
    const ocultarVentana = () => {
        const ventanaEmergente = document.getElementById('miVentana');
        ventanaEmergente.style.display = 'none';
    }
      
    return(
        <>
            <div class="ventana-emergente" id="miVentana">
                    <div class='w-100 d-flex justify-content-end'>
                        <i class="fot-icon bi bi-x-square-fill" onClick={ocultarVentana}></i>
                    </div>
                <div class='columns'>
                    <Link to={"https://www.linkedin.com/in/edwin-rodriguez-7b717a16b"}>
                        <div class='perfil d-flex flex-column align-items-center'>
                            <img class='img-linkedin' src="https://avatars.githubusercontent.com/u/89140273?v=4" alt="edwin" />
                            <span>Edwin Rodriguez Garcia</span>
                        </div>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/luis-galea-207123255/ "}>
                        <div class='perfil d-flex flex-column align-items-center'>
                            <img class='img-linkedin' src="https://avatars.githubusercontent.com/u/101140382?s=64&v=4" alt="Luis" />
                            <span>Luis Galea</span>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div class='perfil d-flex flex-column align-items-center'>
                            <img class='img-linkedin' src="https://avatars.githubusercontent.com/u/113463357?s=64&v=4" alt="Tomas" />
                            <span>Tomas Unizony</span>
                        </div>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/matias-nicolas-lanza-091955244/"}>
                        <div class='perfil d-flex flex-column align-items-center'>
                            <img class='img-linkedin' src="https://avatars.githubusercontent.com/u/54365396?s=64&v=4" alt="Matias" />
                            <span>Matias Lanza</span>
                        </div>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/diego-galeano-b67548281/"}>
                        <div class='perfil d-flex flex-column align-items-center'>
                            <img class='img-linkedin' src="https://avatars.githubusercontent.com/u/73548326?s=64&v=4" alt="Diego" />
                            <span>Diego Galeano</span>
                        </div>
                    </Link>
                    <Link to={""}>
                        <div class='perfil d-flex flex-column align-items-center'>
                            <img class='img-linkedin' src="https://avatars.githubusercontent.com/u/109426775?s=64&v=4" alt="Bryan" />
                            <span>Bryan Cardenas</span>
                        </div>
                    </Link>
                </div>
            </div>

            <footer class='footer w-100 d-flex align-items-center justify-content-evenly'>
                <Link to={"/"} class='link'>
                    <p class="fot-icon">ONE &copy;</p>
                </Link>
                <Link to={"/contact"}>
                    <i class=" fot-icon bi bi-info-circle"></i>
                </Link>

                <Link to={"https://github.com/Galy77/PF-Grupo-20"}>
                    <i class=" fot-icon bi bi-github"></i>
                </Link>
                <i class=" fot-icon bi bi-linkedin" onClick={mostrarVentana}></i>               
            </footer>
        </>
    )
}
export default Footer