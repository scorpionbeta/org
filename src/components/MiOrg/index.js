import { useState } from "react"
import "./MiOrg.css"

const MiOrg=(props)=>{
    
    // const [mostrar, actualizarMostrar] = useState (true)
    // const manejarClick = () =>{
    //     console.log("Mostrar / Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }


    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="Boton para ocultar y mostrar los equipos" onClick={props.cambiarMostrar}/>
    </section>
}


export default MiOrg