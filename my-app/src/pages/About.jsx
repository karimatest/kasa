import React from "react";
import BannerAbout from "../components/BannerAbout";
import Collapse from "../components/Collapse";



const About = () => {
    return (
        <div className="About">
            <BannerAbout />
            <div className="About-collap">
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                    et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />
                
            </div>
        </div>
    )
}
export default About;
