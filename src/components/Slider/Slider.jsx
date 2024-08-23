import { useState } from "react";
import { data } from "./../../data/SliderData";
import "./Slider.css";

const Slider = () => {
  const [current, setCurrent] = useState(1);

  const handlePrev = () => {
    setCurrent(current == 1 ? data.length : (prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrent(current == data.length ? 1 : (prev) => prev + 1);
  };

  const handleClick = (index) => {
    setCurrent(index + 1);
  };

  return (
    <div className="slider">
      <div className="slides">
        {data.map((slide, index) => {
          return (
            <div
              key={index}
              className={current == index + 1 ? "slide active" : "slide"}
            >
              <div className="slide-content">
                {slide.city}
                <h2 className="slide-text">{slide.text}</h2>
              </div>
              <img src={slide.img} alt="" />
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={() => handlePrev()} className="btn prev-btn"><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={() => handleNext()} className="btn next-btn"><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      <div className="pagination">
        {data.map((dot, index) => (
          <span
            key={index}
            onClick={() => handleClick(index)}
            className={current == index + 1 ? "active" : ""}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
