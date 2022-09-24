
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        <footer>
            <div>
            <p>Copyright &copy; 2022</p>
            <Link style={{color:'black'}} to="/about"> About</Link>
            </div>
        </footer>
     );
}

export default Footer;