import React, { useState } from "react";
import previous from "../../src/images/Vector-7.png"
import next from "../../src/images/Vector-2.png"

const SlideShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handlePreviousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

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
        {current + 1}/{length}
      </div>
    </>
  )}
  {slides.map((slide, index) => {
    return (
      <div key={index} className="image-container">
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
