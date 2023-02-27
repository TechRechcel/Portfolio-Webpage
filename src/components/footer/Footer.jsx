import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
export default function Footer() {
    return (
        <footer>
            <a href="" className='footer__logo'>Rechcel Toledo</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experiences">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="htpps://facebook.com"><FaFacebook/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://twitter.com"><IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Rechcel Toledo. All rights reserved.</small>
            </div>
        </footer>
    )
}