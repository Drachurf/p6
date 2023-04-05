import React, { useState } from "react";
import previous from "../../../src/images/Vector-7.png"
import next from "../../../src/images/Vector-2.png"

const SlideShow = ({ slides }) => {
  // tableau d'images (slides) et retourne élément section qui contient le diaporama.

  const [current, setCurrent] = useState(0); //hook

  const length = slides.length;
  // La longueur du tableau d'images slides

  const handlePreviousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  // Vérification que le tableau d'images (slides) est un tableau et qu'il contient au moins une image. Sinon la fonction renvoie null.

  return (
    <section>
      {/* Si le diaporama contient plus d'une image, il affiche les boutons de navigation et le compteur d'images. */}
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
            {/* Le compteur d'images affiche le numéro de l'image actuelle et le nombre total d'images. */}
            {current + 1}/{length}
          </div>
        </>
      )}
      {/* Affiche chaque image dans un conteneur. */}
      {slides.map((slide, index) => {
        return (
          <div key={index} className="image-container">
            {/* Cette instruction affiche l'image correspondant à l'index actuel uniquement. */}
            {index === current && (<img src={slide} alt="travel" className="carrousel" />)}
          </div>
        );
      })}
    </section>
  );
};

export default SlideShow;