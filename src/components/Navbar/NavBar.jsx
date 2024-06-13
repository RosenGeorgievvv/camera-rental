import '../Navbar/Navbar.css'

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
            <img src="" alt="" />
        </div>

        <img src="" alt="" className='toggle-icon' />
    </div>
  )
}

export default NavBar