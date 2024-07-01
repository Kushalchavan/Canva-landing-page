import "./Footer.css";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="upper-footer">
        <div>
          <h4>Features</h4>
          <ul>
            <li>Curved text generator</li>
            <li>Photo effects</li>
            <li>Image enhancer</li>
            <li>Add frames to photos</li>
            <li>Add text to photos</li>
            <li>Online video recorder</li>
            <li>Video trimmer</li>
            <li>Convert videos to MP4</li>
            <li>See more features</li>
          </ul>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li>Design ideas</li>
            <li>Curtom prints</li>
            <li>Font pairing</li>
            <li>Colours</li>
            <li>Colour wheel</li>
            <li>Colour palette generator</li>
            <li>Blog</li>
            <li>Apps</li>
          </ul>
        </div>

        <div>
          <h4>Community</h4>
          <ul>
            <li>Online cummunites</li>
            <li>Creators</li>
            <li>Canva Represents Fund</li>
            <li>Developers</li>
            <li>Partnerships</li>
            <li>Affliates programme</li>
          </ul>
        </div>

        <div>
          <h4>Dowmload</h4>
          <ul>
            <li>IOS</li>
            <li>Android</li>
            <li>Windows</li>
            <li>Mac</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Sustainablity</li>
            <li>Trust Centre</li>
            <li>Security</li>
            <li>Teams and Privacy</li>
            <li>Contact Sales</li>
          </ul>
        </div>
      </div>

      <div className="underline"></div>

      <div className="bottom-footer">
        <button>English (India)</button>

        <div className="middle-footer">
          <p>&copy; 2024 All Rights Reserved, Canva</p>
          <p>Privacy policy | Terms</p>
        </div>

        <div className="left-side-footer">
        <Facebook />
        <Twitter />
        <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
