import React, { useState } from "react";
import { SliderData } from "../../src/components/sliderData.js";

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
};

  return (
    <section>
        <button className="left" onClick={handlePreviousSlide}>
          Previous
        </button>
        <button className="right" onClick={handleNextSlide}>
          Next
        </button>
        {SliderData.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img src={slide.image} alt="travel" className="carrousel" />
              )}
            </div>
          );
        })}
    </section>
  );
};

export default SlideShow;
