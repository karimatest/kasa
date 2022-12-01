import React from "react";
import Error404 from "../components/Images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFound">
          <div className="Error-img">
            <img src={Error404} alt=""></img>
          </div>
          <p className="Error-p">
          Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to={'/'} className="Error-link">
            Retour sur la page d'acceuil
          </Link>
        </div>
    )
}
export default NotFound;