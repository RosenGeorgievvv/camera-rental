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
            <a href="mailto:office@magicshoprental.com" className="email-link">
                <img src={email} alt="email" /> office@magicshoprental.com
              </a>
            </li>
            <li>
              <img src={phoneIcon} alt="phoneIcon" />: +359 897 89 05 53
            </li>
            <li>Address: Levski – G 47, Sofia, Bulgaria</li>
          </ul>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/MagicShopRental"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Magic Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
