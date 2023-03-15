import { Link } from "react-router-dom";


function Card({ title, cover, id}) {
    const divStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)), url(' + cover + ')',
    backgroundSize: 'cover',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column-reverse',
    borderRadius: '25px',
    height: '340px',
};
    
    return (
        <>
        <div className='conteneur'>
            <Link style={divStyle} to={`/fiche/${id}`}>
              <div className="imgannonce" alt={title}></div>
                <h5>{title}</h5>
            </Link>
        </div>
        </>
    )
}
export default Card