import { createBrowserRouter } from 'react-router';
import Auth from '../Layouts/Auth';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },

      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);
