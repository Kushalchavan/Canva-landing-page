import { everyoneSection } from "../constants/data";
import Button from "./Button";
import "./PerfectFit.css";

const PerfectFit = () => {
  return (
    <>
      <section>
        <div className="heading">
          <h1>A Perfect fit for everyone</h1>
        </div>
        <div className="card">
          {everyoneSection.map((item, index) => (
            <div key={index} className="main-card">
              <h1>{item.text}</h1>
              <p>{item.description}</p>
              <Button>{item.buttonText}</Button>
            </div>
          ))}
        </div>

        <p className="text">
          <span>Educational organisations</span> and <span>nonprofits</span> can
          enjoy premium Canva features fro free
        </p>
      </section>
    </>
  );
};

export default PerfectFit;
