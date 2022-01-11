import React from "react";

import '../styles/components/pages/Home.css';

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="Avion"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a vitae accusamus, 
                    quidem similique natus excepturi earum unde numquam, 
                    repellat ad odio facilis veritatis tempora culpa itaque porro, ullam aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a vitae accusamus, 
                    quidem similique natus excepturi earum unde numquam, 
                    repellat ad odio facilis veritatis tempora culpa itaque porro, ullam aut?</p>
            </div>
            <div className="testimonios right">
                <h2>testimonios</h2>
                <div class="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan Perez - zapatos.com</span>
                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;

