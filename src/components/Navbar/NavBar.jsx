import '../Navbar/Navbar.css';
import magnifyGlass from '../../assets/magnifyGlass.png';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import darklogo from '../../assets/darklogo.jpg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={darklogo} alt="" className='logo' />
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
        <div className='search-box'>
            <input type='text' placeholder='Search' />
            <img src={magnifyGlass} alt="" />
        </div>

        <img src={moon} alt="" className='toggle-icon' />
    </div>
  )
}

export default NavBar