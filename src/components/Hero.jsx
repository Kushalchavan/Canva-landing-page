import { useState } from "react";
import { mainImages } from "../constants/data";
import Button from "./Button";
import "./Hero.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < mainImages.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <main>
      <h1>
        What will you <span className="main-design">design</span> today?
      </h1>
      <p>
        Canva makes it easy to create professional designs and to share or print
        them.
      </p>
      <div className="hero-button">
        <Button>Start designing</Button>
      </div>

      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          <ChevronLeft />
        </button>
        <div
          className="main-slider"
          style={{ transform: `translateX(-${currentSlide * 60}%)` }}
        >
          {mainImages.map((img, index) => (
            <ul key={index} className="slide">
              <li>
                <img src={img.image} alt={img.alt} />
              </li>
            </ul>
          ))}
        </div>
        <button
          className="next"
          onClick={nextSlide}
          hidden={currentSlide === mainImages.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </main>
  );
};

export default Hero;
