// 🔐 Firebase imports for authentication
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// 🧠 React hooks
import { useState } from 'react';
// 🧭 React Router for navigation and linking
import { Link, useNavigate } from 'react-router';
// 🔌 Firebase app instance
import { app } from '../Firebase/Firebase.Config';

const Register = () => {
  // 📨 State for email and password input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔐 Get Firebase Auth instance
  const auth = getAuth(app);

  // 🧭 Hook to navigate programmatically
  const navigate = useNavigate();

  // 📝 Handle form submission
  const handleRegister = e => {
    e.preventDefault();

    // 🔐 Create user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        alert('Registration Successful');
        navigate('/login'); // ✅ Redirect to login page
      })
      .catch(error => {
        console.error('Error:', error.code, error.message); // ❌ Log error
      });
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form className="space-y-4" onSubmit={handleRegister}>
        {/* 🧑 Name input (optional) */}
        {/* <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
        /> */}

        {/* 📧 Email input */}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          required
        />

        {/* 🔒 Password input */}
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          required
        />

        {/* 🚀 Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        {/* 🔁 Link to login page */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
