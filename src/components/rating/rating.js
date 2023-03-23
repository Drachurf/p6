import fullStar from "../../../src/images/Vector-5.png";
import emptyStar from "../../../src/images/Vector-6.png"


const Rating = ({hostRate}) => {

    //Construction d'un Array de 5 éléments qu'on rempli avec les étoiles
    //.fill pour les 5 
    const fullStars = Array(5).fill(<img src={fullStar} alt='Full star' className='Star'/>)

    const emptyStars = Array(5).fill(<img src={emptyStar} alt='Empty Star' className='Star'/>)
    return (
            <div className='ratingStars'>
                {/* map pour créer un nouveau tableau + hostRate pour le nm d'étoiles plein et vide a afficher selon la valeur*/}
                {fullStars.slice(5-hostRate).map((fullStar, index) => {
                return (<p key={index}>{fullStar}</p>)
                })}
                {emptyStars.slice(hostRate).map((emptyStar, index) => {
                return (<p key={index}>{emptyStar}</p>)
                })}
            </div>
    );
  };
  
  export default Rating;