import "./footer.css";
import email from "../../assets/Footer/email.png";
import facebook from "../../assets/Footer/facebook.png";
import phoneIcon from "../../assets/Footer/phoneIcon.png";
   
const Footer = () => {
  return (
    <footer className="footer"> 
      <div className="footer-container">
        <div className="footer-column">
          <ul>
            <li>   
              <img src={email} alt="email" /> office@magicshoprental.com
            </li>
            <li>
              <img src={phoneIcon} alt="phoneIcon" />: +359 897 89 05 53
            </li>
            <li>Address: Levski – G 47, Sofia, Bulgaria</li>
          </ul>
        </div>
        <div className="social-icons">
          <img src={facebook} alt="facebook" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Magic Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
