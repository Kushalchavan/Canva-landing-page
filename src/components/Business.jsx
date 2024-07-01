import "./Business.css";
import Button from "./Button";
import businessImage from "../assets/images/business1.jpg";

const Business = () => {
  return (
    <>
      <section className="section-business">
        <h1>The plan that gets down to business</h1>
        <p className="para-center">
          Empower everyone to design together with Canva Teams
        </p>

        <div className="section-3">
          <div className="section-3-image">
            <img src={businessImage} alt="busines image" />
          </div>
          <div className="section-3-right">
            <h3>AI-powered efficiency</h3>
            <p>
              Leverage AI to create on-brand copy, templates and video-editing.
            </p>

            <h3>Bring your brand in house</h3>
            <p>Set up Brand kits and templates for your team to design with.</p>

            <h3>Beautiful approval flows</h3>
            <p>
              Easily control individual permissions, assign tasks and share your
              work.
            </p>

            <Button>Explore Canva Teams</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
