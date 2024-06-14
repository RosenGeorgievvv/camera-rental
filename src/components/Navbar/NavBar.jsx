import "../Navbar/Navbar.css";
import sunny from "../../assets/sunny.png";
import night from "../../assets/night.png";
import darklogo from "../../assets/darklogo.jpg";
import whitelogo from '../../assets/whitelogo.jpg';


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
      </ul>
      <img onClick={() =>{toggle_mode()}} src={theme == 'light' ? night : sunny} alt="" className="toggle-icon" />
    </div>
  );
};

export default NavBar;
