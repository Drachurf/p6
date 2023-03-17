import Collapse from "../components/collapse";
import React from "react";
import { SliderData } from "../../src/components/sliderData.js";
import SlideShow from "../../src/components/slideshow";

const imge =
  ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"]

/*useEffect(() => {
    fetch("logement.json")
      .then((response) => response.json())
      .then((data) => { 
        const annonce = data.filter(annonce => annonce.id === id); // ID provient de l'url
        setLoading(false);
        setAnnonce(annonce);
      })
      .catch((error) => console.error(error));
  }, []);*/

function Fiche(annonce) {
  return (
    <>

<SlideShow slides={SliderData} />
      <div className="titre">
        <div>
          <h2>Cozy loft on the Canal Saint-Martin{}</h2>
          <h3>Paris - Ile de France{}</h3>
        </div>
        <div className="hote">
          <p>Nom Prénom{}</p>
          <img className="profil" src={imge} alt="c'est beau{}" />
        </div>
      </div>
      <div className="boxnote">
        <div className="tags">TAGS{}</div>
        <p>S T A R S{}</p>
      </div>
      <div className="description">
      <Collapse titrepara={""} para={""} />
      <Collapse titrepara={""} para={""} />
      </div>
    </>
  );
}
export default Fiche;
