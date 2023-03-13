import React from "react";
import '../Estilos/Contacto.css';
import LinkedIn from '../Imágenes/LinkedIn.png';
import GitHub from '../Imágenes/GitHub.png';
import Twitter from '../Imágenes/Twitter.png';
import Gmail from '../Imágenes/Gmail.png';

function Contacto(){
    return(
        <aside className="Contacto" id="Contacto">
            <form class="Formulario" action="https://formspree.io/f/meqwzzvv" method="POST">
                <label>Tu Correo - You Email</label>
                <input type={"email"} name="email"/>
                <label>Tu Mensaje - You Message</label>
                <textarea name="message"></textarea>
                <div class="BotónDeEnvio">
                    <button type="submit">Enviar - Send</button>
                </div>
            </form>

            <div className="RedesSociales">
                <small>Mis Redes</small>

                <div className="MisRS">
                    <a href={'https://www.linkedin.com/in/omar-aguilar-d%C3%A1vila-64b99921a/'}><img src={LinkedIn} alt='LinkedIn'/></a>
                    <a href={'https://github.com/0marJ0asAD'}><img src={GitHub} alt='GitHub'/></a>
                    <a href={'https://www.twitter.com/RINT0RIN0'}><img src={Twitter} alt='Twitter'/></a>
                    <a href={'mailto:OmarJoasAD99@gmail.com'}><img src={Gmail} alt='Gmail'/></a>
                </div>

            </div>

        </aside>
    );
}

export default Contacto;