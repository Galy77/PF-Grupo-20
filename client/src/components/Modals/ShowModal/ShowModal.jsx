import "./ShowModal.style.css"
function ShowModal ({children,estadoShowModal}){
    return(
        <>
            {estadoShowModal &&
                <div className="Overlay">
                    <div className="ContenedorModal">
                        {children}
                    </div>
                </div>
            }
        </>
    )
}
export default ShowModal 