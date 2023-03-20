import Collapse from "../components/collapse";
import { SliderData } from "../../src/components/sliderData.js";
import SlideShow from "../../src/components/slideshow";
import { useParams } from "react-router-dom";
import annonceJson from "../../src/module/logement.json";

function Fiche() {
  const {id} = useParams();
  const element = annonceJson.find((item) => item.id === id);

  // Utiliser ficheData pour afficher les données associées à l'ID

  return (
    <>
    <SlideShow slides={SliderData} />
    <div className="titre">
      <div>
        <h2>{element.title}</h2>
        <h3>{element.location}</h3>
      </div>
      <div className="hote">
        <p>{element.host.name}</p>
        <img className="profil" src={element.host.picture} alt={element.host.name}/>
      </div>
    </div>
    <div className="boxnote">
      <div className="tags">{element.tags} PAS BON !!!!!!!!!!! </div> 
      <p>{element.rating} PAS BON !!!!!!!!!!!!!</p>
    </div>
    <div className="description">
      <Collapse titre="Description" para={element.description} />
      <Collapse titre="Equipements" para={<ul><li>{element.equipments}</li> PAS BON !!!!!!!!!!!! </ul>} />
    </div>
    </>
  );
}

export default Fiche;