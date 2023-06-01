import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores]= useState([])

  const[equipos,actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Innovacion y gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },
]
)



    //ternario --> condicion ? seMuestra : noSeMuestra

    const cambiarMostrar = () => {
      actualizarMostrar(!mostrarFormulario)
    }

    //Registrar colaborador

    const registrarColaborador = (colaborador) =>{
        console.log("Nuevo colaborador",colaborador)
        //Spread operator
        actualizarColaboradores([...colaboradores,colaborador])
    }
    //Eliminar colaborador
    const eliminarColaborador = (id) =>{
      const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
      actualizarColaboradores(nuevosColaboradores)
    }

    //actualizar color de equipo
    const actualizarColor= (color, id) =>{
      console.log("Actualizar:",color,id)
      const equiposActualizados = equipos.map((equipo)=>{
        if (equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
      })

      actualizarEquipos(equiposActualizados)
    }

    //Crear equipo

    const crearEquipo= (nuevoEquipo) =>{
          console.log(nuevoEquipo)
          actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
    }

    const like = (id) =>{
      console.log("like",like)
      const colaboradoresActualizados = colaboradores.map((colaborador)=>{
        if(colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
      actualizarColaboradores(colaboradoresActualizados)
    }

    //Lista de equipos

  return (
    <div className="App">
      <Header/>
      { mostrarFormulario===true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador} 
      crearEquipo={crearEquipo}/> : <div></div>}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo)=><Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor} 
        like={like}/>)
      }

      <Footer/>

    </div>
  );
}

export default App;
