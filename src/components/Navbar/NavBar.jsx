import "../Navbar/Navbar.css";
import magnifyGlass from "../../assets/magnifyGlass.png";
import whiteSun from "../../assets/whiteSun.png";
import moon from "../../assets/moon.png";
import darklogo from "../../assets/darklogo.jpg";
import whitelogo from '../../assets/whitelogo.jpg';
import whiteGlass from '../../assets/whiteGlass.png';

const NavBar = ({ theme, setTheme }) => {
          
    const toggle_mode = () =>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className={`navbar ${theme}`}>
      <img src={theme == 'light' ? whitelogo : darklogo} alt="" className="logo" />
      <ul>
        <li>Cameras</li>
        <li>Lenses & Filters</li>
        <li>Accessories</li>
        <li>Grip</li>
        <li>Lighting</li>
        <li>Sound</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      <img onClick={() =>{toggle_mode()}} src={theme == 'light' ? moon : whiteSun} alt="" className="toggle-icon" />
    </div>
  );
};

export default NavBar;
