import react from "react";
import '../styles/components/pages/Galeria.css';

const Galeria = (props) => {
    return (
        <main className="holder">
        <h2>Galeria</h2>
        <div className="galeria">
            <div className="foto">
                <img src="img/galeria/img01.jpg" alt="img01"/>
            </div>
            <div className="foto">
                <img src="img/galeria/img02.jpg" alt="img02"/>
            </div>
            <div class="foto">
                <img src="img/galeria/img03.jpg" alt="img03"/>
            </div>
            <div className="foto">
                <img src="img/galeria/img04.jpg" alt="img04"/>
            </div>
            <div className="foto">
                <img src="img/galeria/img05.jpg" alt="img05"/>
            </div>
            <div className="foto">
                <img src="img/galeria/img06.jpg" alt="img06"/>
            </div>
            <div className="foto">
                <img src="img/galeria/img07.jpg" alt="img07"/>
            </div>
        </div>
    </main>
    );
}

export default Galeria;