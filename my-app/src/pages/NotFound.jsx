import React from "react";
import Error404 from "../Images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFound">
          <div className="Error-img">
            <img className="Error" src={Error404} alt="page d'erreur" ></img>
          </div>
          <p className="Error-p">
              Oups! La page que 
           vous demandez n'existe pas.
          </p>
          <Link to={'/'} className="Error-link">
            Retour sur la page d'acceuil
          </Link>
        </div>
    )
}
export default NotFound;