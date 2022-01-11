import React from "react";

import '../styles/components/pages/Contacto.css'

const Contacto = (props) => {
    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto Rápido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email"/>
                </p>
                <p>
                    <label for="">Teléfono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="comentario">Comentario</label>
                    <textarea name="" id="comentario"></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div className="columna right">
            <h2>Otras vias de contacto</h2>
            <p>Tambien se pueden comunicar con nostros...</p>
            <ul>
                <li>Teléfono: 4305-3599</li>
                <li>Email: contacto@transportesX.com</li>
                <li>Facebook:</li>
                <li>Twitter:</li>
                <li>Instagram:</li>
            </ul>
        </div>
    </main>
    );
}

export default Contacto;