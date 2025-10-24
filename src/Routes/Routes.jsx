import { createBrowserRouter } from 'react-router';
import Auth from '../Layouts/Auth';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Logout from '../Pages/Logout';
import Register from '../Pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Home/>,
      },

      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
]);
