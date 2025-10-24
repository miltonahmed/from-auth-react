import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Auth = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='flex justify-center items-center min-h-screen bg-gray-100'>
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
