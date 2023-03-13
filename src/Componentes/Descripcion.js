import React from "react";
import '../Estilos/Descripcion.css';
import Informática from '../Imágenes/Computadora.png';
import Cristianismo from '../Imágenes/Evangelio.png';
import VídeoJuegos from '../Imágenes/Control de VídeoJuegos.png';
import CV from '../CurriculumyCertificados/Curriculum Vitae.pdf';

function Descripcion(){
    return(
        <section className="Descripción" id="AcercaDeMí">

            <div className="Detalles">
                <b id="SobreMí-EtiquetaB">Sobre Mí</b>

                <b id="LoremIpsum">Hola, me llamo Omar Aguilar Dávila. Lorem Ipsum dolor, sit amet consectetur adipisicing elit, At corrupti recusandae et est ratione commodi sit impedit iusto quae ullam officia, praesentium eaque vel deleniti in voluptatem quo accusamus maxime.</b>
            </div>

            <div className="DatosEIntereses">

                <div className="TextoDatos">
                    <b>Datos Personales</b>
                </div>

                <div className="DatosPersonales">

                    <div className="Cumpleaños">
                        <b id="Cumpleaños">Cumpleaños: </b>
                        <label id="CumplimientoCump">24 - 06 - 1999</label>
                    </div>

                    <div className="Teléfono">
                        <b id="Teléfono">Teléfono - Móvil: </b>
                        <label id="CumplimientoTel"><a href={'tel: +525576051513'}>+52 55 7605 1513</a></label>
                    </div>

                    <div className="Email">
                        <b id="Correo">Correo - Email: </b>
                        <label id="CumplimientoCorreo"><a href={'mailto:OmarJoasAD99@gmail.com'}>OmarJoasAD99@gmail.com</a></label>
                    </div>

                    <div className="GitHubP">
                        <b id="GitHubP">GitHub Pages: </b>
                        <label id="CumplimientoGitHubP">Ésto he trabajado en <a href={'https://github.com/0marJ0asAD/Proyectos1OAD.github.io'}>GitHub</a></label>
                    </div>

                    <div className="Dirección">
                        <b id="Dirección">Localidad: </b>
                        <label id="CumplimientoDir">Ciudad de México,México City</label>
                    </div>

                    <div className="Ocupación">
                        <b id="Ocupación">Ocupación - Occupation: </b>
                        <label id="CumplimientoOcup">Desarrollador</label>
                    </div>

                </div>

                <div className="Intereses">
                    <b>Intereses</b>
                </div>

                <div className="MisIntereses">

                    <div className="Computación">
                        <b>Informática</b>
                        <img src={Informática} alt='Computación'/>
                    </div>

                    <div className="Evangelio">
                        <b>Evangelico</b>
                        <img src={Cristianismo} alt='Cristiano'/>
                    </div>

                    <div className="VídeoJuegos">
                        <b>Vídeojuegos</b>
                        <img src={VídeoJuegos} alt='VídeoJuegos'/>
                    </div>

                </div>

                <div className="BotónDescargaCV">
                    <button type={'button'}><a href={CV} download>Descargar CV</a></button>
                </div>

            </div>

            <form action="" method="" className="Formulario"></form>

        </section>
    );
}

export default Descripcion;