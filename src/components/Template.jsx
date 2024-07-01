import { template } from "../constants/data";
import "./Template.css";

const Template = () => {
  return (
    <section className="section-3-template">
      <h1>Templates for absolutely anything</h1>
      <p>
        Customise an office template, or design something more personal, like an
        invitation.
      </p>

      <div className="templates-container">
        {template.map((tem, index) => (
          <div key={index} className="template">
            <img src={tem.image} alt={tem.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Template;
