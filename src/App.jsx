import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import PerfectFit from "./components/PerfectFit";
import TrustedCompany from "./components/TrustedCompany";
import Template from "./components/Template";
import Business from "./components/Business";
import Surprises from "./components/Surprises";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-tag">
        <Hero />
        <div className="inner-section">
        <PerfectFit/>
        <TrustedCompany/>
        <Template/>
        <Business/>
        </div>
        <Surprises/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
