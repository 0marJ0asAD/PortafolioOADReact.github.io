import React from "react";
import '../Estilos/Navegacion.css';
import Logotipo from '../Imágenes/Computación.png';

function Navegación(){
    return(
        <nav className="Menu-Navegador">
            <nav className="Logotipo">
                <a href='../App'><img src={Logotipo} alt='Logotipo'/></a>
            </nav>

            <nav className="BotónHamburguesa">
                <input type={'checkbox'} id='Btn-Menu'/>

                <label for="Btn-Menu" className="Label-Menu">
                    <span id="Spn-1"></span>
                    <span id="Spn-2"></span>
                    <span id="Spn-3"></span>
                </label>

                <div className="Listas-Navegación">
                    <li><a href="#Inicio">Inicio</a></li>
                    <hr/>
                    <li><a href="#AcercaDeMí">Sobre Mí</a></li>
                    <hr/>
                    <li><a href="#Habilidades">Skills</a></li>
                    <hr/>
                    <li><a href="#CV">Curriculum</a></li>
                    <hr/>
                    <li><a href="#Portafolio">Portafolio</a></li>
                    <hr/>
                    <li><a href="#Contacto">Contacto</a></li>
                </div>

            </nav>

            <nav className="Navegación-Listas">
                <li><a href={'#Inicio'}>Inicio</a></li>
                <li><a href={'#AcercaDeMí'}>Sobre Mí</a></li>
                <li><a href={'#Habilidades'}>Skills</a></li>
                <li><a href={'#CV'}>Curriculum</a></li>
                <li><a href={"#Portafolio"}>Portafolio</a></li>
                <li><a href={"#Contacto"}>Contacto</a></li>
            </nav>

        </nav>
    );
}

export default Navegación;