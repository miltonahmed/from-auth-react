import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div>
      {/* 🧭 Navigation bar container */}
      <nav className="py-5">
        {/* 📌 Navigation links */}
        <ul className="flex justify-center gap-5 items-center">
          <li>
            {/* 🔐 Link to login page */}
            <Link
              to="/login"
              className="py-3 px-3 bg-blue-700 rounded-lg text-white"
            >
              Login
            </Link>
          </li>
          <li>
            {/* 📝 Link to registration page */}
            <Link
              to="/register"
              className="py-3 px-3 bg-blue-700 rounded-lg text-white"
            >
              Register
            </Link>
          </li>
          <li>
            {/* 📝 Link to registration page */}
            <Link to="/logout" className='py-3 px-3 bg-red-700 rounded-lg text-white'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
