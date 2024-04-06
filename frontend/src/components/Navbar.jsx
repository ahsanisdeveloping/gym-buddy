import { Link } from "react-router-dom";
import '../styles/Navbar.css'
const Navbar = () => {
  return <div>
    <Link to='/' className="navbarLinks"><h1>GYM Buddy</h1></Link>
  </div>;
};

export default Navbar;
