import imgBack from "../../src/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";

function Apropos() {
  return (
    <div className="apropos">
      <img className="home" src={imgBack} alt="Montagne" />
  <details className="paraporpos">
      <summary>Fiabilité</summary>
      <p>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </p>
  </details>
      <details className="paraporpos">
        <summary>Respect</summary>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </details>
      <details className="paraporpos">
        <summary>Service</summary>
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </details>
      <details className="paraporpos">
        <summary>Sécurité</summary>
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </details>
    </div>
  );
}
export default Apropos
