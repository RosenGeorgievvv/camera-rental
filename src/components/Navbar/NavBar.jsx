import '../Navbar/Navbar.css';
import magnifyGlass from '../../assets/magnifyGlass.png';

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src="" alt="" className='logo' />
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
    </div>
  )
}

export default NavBar