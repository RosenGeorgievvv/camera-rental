import './footer.css';
import facebook from '../../assets/'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: office@magicshoprental.com</li>
                        <li>Phone: +359 897 89 05 53</li>
                        <li>Address: Levski – G 47, Sofia, Bulgaria</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Magic Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
