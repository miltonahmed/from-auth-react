import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <nav className=''>
        <ul className="flex justify-center gap-5 items-center">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
