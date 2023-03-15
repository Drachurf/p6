const imge =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";

function Fiche(annonce) {
  return (
    <>
    <div>
      <img className="carrousel" src={imge} alt="cest beau" />
    </div>
      <div className="titre">
        <div>
          <h2>Cozy loft on the Canal Saint-Martin</h2>
          <h3>Paris - Ile de France</h3>
        </div>
        <div className="hote">
          <p>Nom Prénom</p>
          <img className="profil" src={imge} alt="c'est beau" />
        </div>
      </div>
      <div className="boxnote">
        <div className="tags">TAGS</div>
        <p>S T A R S</p>
      </div>
      <div className="description">
        <details className="paraporpos">
          <summary>Description</summary>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </details>
        <details className="paraporpos">
          <summary>Equipements</summary>
          <ul>
            <li>La bienveillance</li>
          </ul>
        </details>
      </div>
    </>
  );
}
export default Fiche;
