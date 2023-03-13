import React from "react";
import '../Estilos/Habilidades.css';
import MicrosoftWord from '../Imágenes/Microsoft Word.png';
import MicrosoftExcel from '../Imágenes/Microsoft Excel.png';
import MicrosoftPowerPoint from '../Imágenes/Microsoft PowerPoint.png';
import MicrosoftAccess from '../Imágenes/Microsoft Access.png';
import HTML from '../Imágenes/HTML.png';
import CSS3 from '../Imágenes/CSS.png';
import SCSS from '../Imágenes/SASS.png';
import JavaScript from '../Imágenes/JavaScript.png';
import ReactJS from '../Imágenes/React JS.png';
import Py from '../Imágenes/Python.png';
import SQL from '../Imágenes/SQL.png';
import PHP from '../Imágenes/PHP.png';

function Habilidades(){
    return(
        <section className="Habilidades" id="Habilidades">
            <div className="MisHabilidades">
                <b id="TextoHabilidades">Mis Habilidades</b>
            </div>

            <div className="HabilidadesConjunto">

                <div className="HabilidadesParte1">
                    <div className="MicrosoftWord">
                        <b>Word</b>
                        <img src={MicrosoftWord} alt='Microsoft Word'/>
                    </div>

                    <div className="MicrosoftExcel">
                        <b>Excel</b>
                        <img src={MicrosoftExcel} alt='Microsoft Excel'/>
                    </div>

                    <div className="MicrosoftPowerPoint">
                        <b>PowerPoint</b>
                        <img src={MicrosoftPowerPoint} alt='Microsoft PowerPoint'/>
                    </div>

                    <div className="MicrosoftAccess">
                        <b>Access</b>
                        <img src={MicrosoftAccess} alt='Microsoft Access'/>
                    </div>
                </div>

                <div className="HabilidadesParte2">
                    <div className="HTML">
                        <b id="HTML">HTML</b>
                        <img src={HTML} alt='HTML5'/>
                    </div>

                    <div className="CSS">
                        <b id="CSS">CSS</b>
                        <img src={CSS3} alt='CSS'/>
                    </div>

                    <div className="SASS">
                        <b id="SASS">SASS</b>
                        <img src={SCSS} alt='SASS-SCSS'/>
                    </div>

                    <div className="JavaScript">
                        <b id="JS">JavaScript</b>
                        <img src={JavaScript} alt='JavaScript'/>
                    </div>
                </div>

                <div className="HabilidadesParte3">

                    <div className="React-JS">
                        <b id="React">React-JS</b>
                        <img src={ReactJS} alt='React-JS'/>
                    </div>

                    <div className="Python">
                        <b id="Py">Python</b>
                        <img src={Py} alt='Python'/>
                    </div>

                    <div className="SQL">
                        <b id="SQL">SQL</b>
                        <img src={SQL} alt='SQL'/>
                    </div>

                    <div className="PHP">
                        <b id="PHP">PHP</b>
                        <img src={PHP} alt='PHP'/>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Habilidades;