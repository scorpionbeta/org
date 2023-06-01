import "./ListaOpciones.css"

const ListaOpciones = (props) =>{



    const manejarCambio = (e) =>{
        console.log("cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map((equipo, Index)=>{
                    return <option key={Index}>{equipo}</option>
            }) }
        </select>
    </div>
}


export default ListaOpciones