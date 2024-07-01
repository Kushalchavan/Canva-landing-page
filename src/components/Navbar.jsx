import { navItems, logo } from "../constants/data";
import { Search, CircleHelp, AlignJustify, X } from "lucide-react";
import "./Navbar.css";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleNavbar = () => {
    setIsNavShowing(!isNavShowing);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-nav">
          <div className="logo-bars">
            <button onClick={handleNavbar} className="burger-bars" hidden>
              {isNavShowing ? <X /> : <AlignJustify />}
            </button>
            <img src={logo} alt="Logo" />
          </div>
          <div className={`navbar-navitems ${isNavShowing ? "show" : ""}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </div>
        </div>

        <div className="right-nav">
          <div className="icons">
            <Search />
            <CircleHelp />
          </div>
          <div className="navbar-buttons">
            <button className="normal-button">Log In</button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
