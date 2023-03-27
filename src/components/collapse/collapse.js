import vector from "../../../src/images/Vector-3.png";

function Collapse(collapse) {
  // props collapse pour pouvoir modifier para et titre
  return (
    <details className="parapropos">
      <summary>
        <div>{collapse.titre}</div>{" "}
        <img src={vector} alt="cliquer pour afficher le texte" />
      </summary>
      <div className="paragraphe">{collapse.para}</div>
    </details>
  );
}
export default Collapse;