/* eslint-disable react/prop-types */
import "./OuterModal.style.css"
function OuterModal ({children,estadoOuterModal,setEstadoOuterModal}){
    return(
        <>
            {estadoOuterModal &&
                <div className="Overlay">
                    <div className="ContenedorModal">
                        <h1>holis</h1>
                        <button className="BotonCerrar" onClick={()=>setEstadoOuterModal(false)}>X</button>
                    {children}
                    </div>
                </div>
            }
        </>
    )
}
export default OuterModal 