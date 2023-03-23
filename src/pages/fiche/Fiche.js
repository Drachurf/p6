import Collapse from "../../components/collapse/collapse";
import SlideShow from "../../components/slideshow/slideshow.js";
import { useParams } from "react-router-dom";
import logement from "../../json/logement.json";
import Rating from "../../components/rating/rating.js";
import { useNavigate } from "react-router-dom";

function Fiche() {
  //hook pour récupérer l'id du logement
  const { id } = useParams();
  // Utiliser element pour afficher les données associées à l'id
  const element = logement.find((item) => item.id === id);

  // utilisation de useNavigate pour la redirection
  const navigate = useNavigate();

  // Vérifier si l'id est valide ou non
  const idValid = logement.some((item) => item.id === id);
  console.log(idValid);
  // vérifier si l'élément est présent, sinon rediriger vers la page 404
  if (!idValid) {
    navigate("/page404");
    return null;
  }

  const images = element.pictures.map((picture) => picture);

  return (
    <>
      {/* insertion des composants nécessaires et récupération des éléments (element) */}
      <SlideShow slides={images} />
      <div className="information">
        <div>
          <h2>{element.title}</h2>
          <h3>{element.location}</h3>
          <div className="tags">
            {/* création du tableu tag pour récupérer les différents tag, avec une clef unique tag*/}
            {element.tags.map((tag) => (
              <div className="tag" key={tag}>
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
            <div>
              <Rating hostRate={element.rating} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <Collapse titre="Description" para={element.description} />
        {/* Création d'un table pour récupérer la liste des équipements*/}
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
