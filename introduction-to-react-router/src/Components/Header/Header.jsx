import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <span>My Website</span>
        <Link to='/'>Home</Link>
        <NavLink to='/users'>Users</NavLink>
        {/* <Link to='/users'>Users</Link> */}
        <Link to='/posts'>Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;