import React from "react";
import '../Estilos/Curriculum.css';

function Curriculum(){
    return(
        <section className="Curriculum" id="CV">

            <b id="TextoCV">Mi Curriculum</b>

            <div className="SecciónCurriculumOne">
                <div className="PrimerInstituto">
                    <h2 id="CarreraOne">Informática</h2>
                    <em id="InstitutoOne">Conalep Centro México Canadá</em>
                    <em id="AñosExpOne">2016 - 2019</em>
                    <b id="DescripciónOne">En el Conalep Centro México Canadá 
                    aprendí sobre todo lo que es Microsoft Office, como Word, 
                    Excel, PowerPoint, Access, un poco de poncheo de Cables, 
                    Matemáticas Discretas entre otras cosas, pero sobre todo 
                    a Programar, fue entonces cuando me empezó a llamar más 
                    la Programación y decidí enfocarme en Desarrollo Web. 
                    También al último me enseñaron lo que es HTML y CSS desde
                    ahí fue que decidí enfocarme a Diseño Web o Desarrollo Web.</b>
                </div>

                <div className="ServicioyPracticas">
                    <h2 id="CarreraTwo">Archivero o Capturista</h2>
                    <em id="InstitutoTwo">Control y Automatización</em>
                    <em id="AñosExpTwo">2018-2019</em>
                    <b id="DescripciónTwo">En éste trabajo, aprendí todo lo que 
                    es Archivar Documentos de Computadora con
                    Explorador de Windows, me enseñaron a Capturar datos por 
                    Bases de Datos, lo que es SQL en general. 
                    Un extra a la informática que espero pueda sumar
                    puntos.</b>
                </div>

            </div>

            <div className="SecciónCurriculumTwo">
                <div className="BootCampEdC">
                    <h2 id="CarreraThree">Programación Concreta</h2>
                    <em id="InstitutoThree">Escuela de Código</em>
                    <em id="AñosExpThree">2022 - 2023</em>
                    <b id="DescripciónThree">En Escuela de Código me enseñaron
                    todavía con más profundidad para reforzar conocimiento con
                    HTML y CSS empecé a crear mis primeras Páginas Web mejor
                    implementadas hacer Proyectos más avanzados de los que se pueden
                    ver a continuación en <a href={'https://github.com/escuelaDeCodigoMargaritaMaza/Diseno_Web/tree/main/EJERCICIOS/EJERCICIO_FINAL'}>GitHub</a>
                    de hecho ahí fue cuando empecé a ver GitHub y a subir mis Páginas a GitHub Pages y me convencí de que
                    lo mejor era estudiar Desarrollo Web definitivamente. Es lo que me gusta.</b>
                </div>

                <div className="Autodidacta">
                    <h2 id="EspecializaciónOne">Especialización</h2>
                    <em id="InstitutoFour">Auto didacta</em>
                    <em id="AñosExpFour">2021, 2022, 2023 and +</em>
                    <b id="DescripciónFour">Como autodidacta definitivamente ya 
                    empecé a ver cosas más avanzadas, como React, Node JS
                    Símbolo del Sistema, entre otras cosas. Y estoy dónde estoy
                    gracias a mis conocimientos como autodidacta a parte de todo
                    lo que aprendí antes con cursos, mi primera carrera en
                    Informática entre otras cosas.</b>
                </div>
            </div>

        </section>
    );
}

export default Curriculum;