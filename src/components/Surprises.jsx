import "./Surprises.css";
import { secondSlider } from "../constants/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const Surprises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < secondSlider.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <>
      <section className="section-second">
        <h1>We&apos;re full of surprises</h1>
        <p className="para-center">
          Here are some of our best traits you might not know about
        </p>

        <div className="slider">
          <button className="prev" onClick={previousSlide}>
            <ChevronLeft />
          </button>
          <div className="slider-wrapper">
            <div
              className="second"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {secondSlider.map((item, index) => (
                <div key={index} className="second-slider">
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="next" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
      </section>
      <section className="get-started">
        <h1>
          <span>Start designing</span> with canva
        </h1>
        <div className="buttons">
        <Button>Set started for free</Button>
        <button className="button-2">Can for Windows</button>
        </div>
      </section>
    </>
  );
};

export default Surprises;
