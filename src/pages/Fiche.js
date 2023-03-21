import Collapse from "../components/collapse";
import SlideShow from "../../src/components/slideshow";
import { useParams } from "react-router-dom";
import annonceJson from "../../src/module/logement.json";

function Fiche() {
  const { id } = useParams();
  const element = annonceJson.find((item) => item.id === id);
  // Utiliser element pour afficher les données associées à l'ID
  const images = element.pictures.map((picture) => picture);
  return (
    <>
      <SlideShow slides={images} />

      <div className="information">
        <div>
          <h2>{element.title}</h2>
          <h3>{element.location}</h3>
          <div className="tags">
            {element.tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="hoteeval">
          <div className="hote">
            <p>{element.host.name}</p>
            <img
              className="profil"
              src={element.host.picture}
              alt={element.host.name}
            />
          </div>
          <div>
            <div>{element.rating} Etoiles</div>
          </div>
        </div>
      </div>
      <div className="description">
        <Collapse titre="Description" para={element.description} />
        <Collapse
          titre="Equipements"
          para={
            <ul>
              {element.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </>
  );
}

export default Fiche;
