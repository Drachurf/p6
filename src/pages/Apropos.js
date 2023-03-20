import imgBack from "../../src/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Banner from "../components/banner";
import Collapse from "../components/collapse";

const titrepara0 = "Fiabilité";
const para0 = [
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
];
const titrepara1 = "Respect";
const para1 = [
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
];
const titrepara2 = "Service";
const para2 = [
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
];
const titrepara3 = "Sécurité";
const para3 = [
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
];
function Apropos() {
  return (
    <>
      <Banner img={imgBack} alt="Paysage de montagne" />
      <div className="apropos">
        <Collapse titre={titrepara0} para={para0} />
        <Collapse titre={titrepara1} para={para1} />
        <Collapse titre={titrepara2} para={para2} />
        <Collapse titre={titrepara3} para={para3} />
      </div>
    </>
  );
}
export default Apropos;
