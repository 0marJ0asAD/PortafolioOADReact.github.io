import React from "react";
import '../Estilos/PortafolioExp.css';
import ExperenceOne from '../Carrucel de Imágenes/Proyecto 1.png';
import ExperenceTwo from '../Carrucel de Imágenes/Proyecto 2.png';
import ExperenceThree from '../Carrucel de Imágenes/Proyecto 3.png';

function Portafolio(){
    return(
        <section className="Experiencia" id="Portafolio">
            <div className="Portafolio-Experiencia">
                <b id="PortafolioExp">Portafolio - Experiencia</b>
            </div>

            <div className="SecciónExperiencia">
                <div className="ExperienciaOne">
                    <b>Experiencia Uno</b>
                    <img src={ExperenceOne} alt='Primera Experiencia'/>
                </div>

                <div className="ExperienciaTwo">
                    <b>Experiencia Dos</b>
                    <img src={ExperenceTwo} alt='Segunda Experiencia'/>
                </div>

                <div className="ExperienciaThree">
                    <b>Experiencia Tres</b>
                    <img src={ExperenceThree} alt='Tercera Experiencia'/>
                </div>
            </div>
        </section>
    );
}

export default Portafolio;