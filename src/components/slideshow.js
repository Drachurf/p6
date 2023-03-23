import React, { useState } from "react";
import previous from "../../src/images/Vector-7.png"
import next from "../../src/images/Vector-2.png"

const SlideShow = ({ slides }) => {

  const [current, setCurrent] = useState(0); // hooks 
  const length = slides.length; 


// Fonction pour passer d'une image à l'autre
  const handlePreviousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
// s'il n'y pas d'image on enlève de
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section>
  {length > 1 && (
    <>
      <div className="button-container">
        <button className="left" onClick={handlePreviousSlide}>
          <img src={previous} alt="précédent"/>
        </button>
        <button className="right" onClick={handleNextSlide}>
          <img src={next} alt="suivant"/>
        </button>
      </div>
      <div className="compteur">
        {/* compteur d'images par rapport à l'image / et le nombre d'images */}
        {current + 1}/{length}
      </div>
    </>
  )}
  {/* itération du tableu slides avec map()  */}
  {slides.map((slide, index) => {
    return (
      <div key={index} className="image-container">
        {/* key unique + condition d'affichage (une seule image) par rapport à l'index*/}
        {index === current && (
          <img src={slide} alt="travel" className="carrousel" />
        )}
      </div>
    );
  })}
</section>
  );
};
export default SlideShow;
