import { companys } from "../constants/data";
import trustedImage1 from "../assets/images/trustedCompanies1.jpg";
import trustedImage2 from "../assets/images/trustedCompanies2.jpg";
import trustedImage3 from "../assets/images/trustedCompanies3.jpg";
import "./TrustedCompany.css";

export const TrustedCompany = () => {
  return (
    <>
      <section className="main-section">
        <h1>Trusted by well-known companies</h1>
        <div className="slider-2">
          <div className="slider-2-wrapper">
            {companys.map((company, index) => (
              <div key={index} className="slider-2-images">
                <img src={company.image} alt={company.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-first">
          <div className="left-section">
            <h1>Create with AI</h1>
            <p>
              edefine the way you create with Magic Studio, our suite of
              AI-powered tools that generate copy in your brand voice with{" "}
              <span>Magic Write⁠</span> and transform your photos with{" "}
              <span>Magic Edit</span>⁠.
            </p>
            <button>Discover now</button>
          </div>
          <div className="right-section">
            <img src={trustedImage1} alt="first image" />
          </div>
        </div>

        <div className="section-first">
          <div className="right-section">
            <img src={trustedImage2} alt="first image" />
          </div>
          <div className="left-section">
            <h1>Design with others</h1>
            <p>
              Invite friends and family to design with you, or set your whole
              team up to work together. Our collaboration features let you
              comment and work in real-time on <span>Presentations⁠, Whiteboards⁠,
              Docs, Videos,</span>  or that birthday party planning.
            </p>
            <button>Start designing</button>
          </div>
        </div>

        <div className="section-first">
          <div className="left-section">
            <h1>Design and print in one place</h1>
            <p>
              Turn your memories into photo albums, your designs into T-shirts,
              and your branding into  <span>business cards⁠, flyers</span>  or invites. Get all
              your printing done right here with free delivery to your doorstep.
            </p>
            <button>Print your creation</button>
          </div>
          <div className="right-section">
            <img src={trustedImage3} alt="first image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedCompany;
