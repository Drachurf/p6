function Collapse(collapse){
    return(
        <details className="parapropos">
        <summary>{collapse.titre}</summary>
        <p>{collapse.para}</p>
      </details>
    )
}
export default Collapse