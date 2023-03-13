import React from "react";
import '../Estilos/Encabezado.css';
import Gustos from '../Vídeos/Mi Pasion.mp4';
import MiFoto from '../Imágenes/Foto para Curriculum.png';
import CertificadoJS from '../CurriculumyCertificados/JavaScript Escencial.png';
import CertificadoPy from '../CurriculumyCertificados/Competencias Python.pdf';

function Encabezado(){

    return(

        <header className="Encabezado" id="Inicio">
            
            <video src={Gustos} autoPlay loop muted></video>

            <div className="Datos">
                <b id="CV-Curriculum">CV - Curriculum</b>
                <img src={MiFoto} alt='Mi Foto'/>
                <b id="MiNombre">Omar Aguilar Dávila</b>
                <em id="Profesión-DW">Desarrollador Web</em>
                <em id="Profesión-AdD">Analista de Datos</em>

                <div className="Descargas">
                    <button type={'button'}><a href={CertificadoJS} download>Certificado JS</a></button>
                    <button type={'button'}><a href={CertificadoPy} download>Certificado Py</a></button>
                </div>

            </div>

        </header>

    );
}

export default Encabezado;