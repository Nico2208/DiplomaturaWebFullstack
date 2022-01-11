import react from "react";
import '../styles/components/pages/Nosotros.css';

const Nosotros = (props) => {
    return(
        <main className="holder">
        <div className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, officiis vel reprehenderit assumenda libero ut rerum nesciunt facilis dolores! Libero commodi, 
                iure consequatur id praesentium vero voluptates molestiae sunt laboriosam!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ex itaque natus illo. Sunt commodi ipsum eum eos dolores cum, 
                autem cupiditate quia temporibus itaque blanditiis numquam veniam officiis ut!</p>
        </div>
        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium distinctio animi optio voluptatem eaque ducimus. 
                        Veniam quis tenetur esse? Voluptatum animi maxime fugit consequuntur reiciendis. Repellendus quod consectetur dolor tempore.</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt="Patricia Sosa"/>
                    <h5>Patricia Sosa</h5>
                    <h6>Gerente RH</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium distinctio animi optio voluptatem eaque ducimus. 
                        Veniam quis tenetur esse? Voluptatum animi maxime fugit consequuntur reiciendis. Repellendus quod consectetur dolor tempore.</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt="Mark Weber"/>
                    <h5>Mark Weber</h5>
                    <h6>Team Leader</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium distinctio animi optio voluptatem eaque ducimus. 
                        Veniam quis tenetur esse? Voluptatum animi maxime fugit consequuntur reiciendis. Repellendus quod consectetur dolor tempore.</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt="Lisa Kudrow"/>
                    <h5>Lisa Kudrow</h5>
                    <h6>Arquitecta Sr.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium distinctio animi optio voluptatem eaque ducimus. 
                        Veniam quis tenetur esse? Voluptatum animi maxime fugit consequuntur reiciendis. Repellendus quod consectetur dolor tempore.</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt="Homero Sanchez"/>
                    <h5>Homero Sanchez</h5>
                    <h6>Desarollador Ssr.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium distinctio animi optio voluptatem eaque ducimus. 
                        Veniam quis tenetur esse? Voluptatum animi maxime fugit ay chintrolas consequuntur reiciendis. Repellendus quod consectetur dolor tempore.</p>
                </div>

            </div>
        </div>
    </main> 
    );
}

export default Nosotros;