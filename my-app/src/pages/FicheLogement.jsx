/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiData from '../products.json';
import Slideshow from '../components/Slideshow';
import LogementInfo from "../components/LogementInfo";
import Tags from "../components/Tags";
import Profil from "../components/Profil";
import Star from "../components/Star";
import Collapse from "../components/Collapse";
import { useEffect } from "react";

const FicheLogemet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //on cherche le id actuel avec find pour récupèrere ses élèments
  const logementId = apiData.find((item) => item.id === id);
  useEffect(()=>{
    if(!logementId){
      navigate("/NotFound")
     }
  },[logementId,navigate] )

   
    return (
       <section>
        {logementId && (
        <div className="FicheLogement">
          <Slideshow key={logementId.id} pictures={logementId.pictures} /> 
          <LogementInfo title={logementId.title} location={logementId.location}/>
          <div className="tabTag">
          <Tags tags={logementId.tags} />
          </div>

          <div className="profLoge">
          <Profil name={logementId.host.name} picture={logementId.host.picture}/>
          <Star note={logementId.rating}/>
          </div>

          <div className="collapLeft"> 
           <Collapse title="Description" content={logementId.description} />
          </div>

          <div className="collapRight">
           <Collapse title="Equipement" content={logementId.equipments.map((info, index) => (
            <div key={index}>{info} </div>
           ))}
           /> 
          </div>

        </div>
        )
      }
      </section>
    )
   }



export default FicheLogemet;