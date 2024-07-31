import React from "react";
import "./footer.css";
import email from "../../assets/Footer/email.png";
import facebook from "../../assets/Footer/facebook.png";
import phoneIcon from "../../assets/Footer/phoneIcon.png";

const Footer = ({ theme }) => {
  const navigateToGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/xTdavzVhzMRnWP7z7", "_blank");
  };

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const mobileDevice = isMobileDevice();

  return (
    <footer className={`footer ${theme}`} id="contact-us">
      <div className="footer-container">
        <div className="footer-column">
          <ul>
            <li>
              <a href="mailto:xxx" className="email-link">
                <img src={email} alt="email" /> xxx@gmail.com
              </a>
            </li>
            <li>
              {mobileDevice ? (
                <a href="tel:+359 xxx" className="phone-link">
                  <img src={phoneIcon} alt="phoneIcon" /> +359 xxx
                </a>
              ) : (
                <>
                  <img src={phoneIcon} alt="phoneIcon" /> +359 xxx
                </>
              )}
            </li>
            <li onClick={navigateToGoogleMaps} style={{ cursor: "pointer" }}>
              Address: Sofia, Bulgaria
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/MagicShopRental" target="_blank" rel="noopener noreferrer">
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
