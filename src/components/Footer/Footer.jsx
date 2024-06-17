import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <p>We are a leading provider of camera and photography equipment, offering a wide range of products and services to help you capture the perfect shot.</p>
                </div>
                <div className="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li>Cameras</li>
                        <li>Lenses & Filters</li>
                        <li>Accessories</li>
                        <li>Grip</li>
                        <li>Lighting</li>
                        <li>Sound</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: info@example.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Address: 1234 Street Name, City, State, 12345</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Magic Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
