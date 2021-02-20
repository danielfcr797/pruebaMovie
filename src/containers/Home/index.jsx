 import './style.scss';
 import {
    Link
  } from "react-router-dom";
function HomeContainer() {
     return (
        <div className="container_main_home">
            <p className="color"> Container 1 </p>
            <div>
                <h3> 
                    <span className="muchas_clases"> COMA MIERDA!!</span>
                    <Link to="/details"> ir a detalles </Link>
                </h3>
            </div>
        </div>
     )
 }

 export default HomeContainer;