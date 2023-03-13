import React from "react";
import '../Estilos/Menu.css';
import Curriculum from "./Curriculum";
import Descripcion from "./Descripcion";
import Habilidades from "./Habilidades";
import Portafolio from "./PortafolioExp";
import Contacto from "./Contacto";

function Menu(){

    return(

        <main className="Menu">
            <Descripcion></Descripcion>

            <br/><hr/><br/>

            <Habilidades></Habilidades>

            <br/><hr/><br/>

            <Curriculum></Curriculum>

            <br/><hr/><br/>

            <Portafolio></Portafolio>

            <br/><hr/><br/>

            <Contacto></Contacto>
        </main>

    );

}

export default Menu;