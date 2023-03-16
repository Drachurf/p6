const imge =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";
const imge2 =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";
const imge3 =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";

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
      <div>
        <img className="carrousel" src={imge2 && imge3} alt="cest beau" />
      </div>




      
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
        <details className="paraporpos">
          <summary>Description</summary>
          <p>{}</p>
        </details>
        <details className="paraporpos">
          <summary>Equipements</summary>
          <ul>{}</ul>
        </details>
      </div>
    </>
  );
}
export default Fiche;
