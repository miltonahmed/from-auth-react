// 🔐 Import Firebase authentication methods
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// 🧠 Import React hooks
import { useState } from 'react';

// 🧭 Import Link for navigation (❗ fix: should be from 'react-router-dom')
import { Link } from 'react-router';

// 🔌 Import initialized Firebase app
import { app } from '../Firebase/Firebase.Config';

const Login = () => {
  // 📨 State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ⚠️ State for error message display
  const [error, setError] = useState('');

  // 🔐 Get Firebase Auth instance
  const auth = getAuth(app);

  // 📝 Handle login form submission
  const handleLogin = e => {
    e.preventDefault();

    // 🔐 Attempt to sign in with Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user); // ✅ Log user info
        alert('Login Successful'); // 🎉 Notify user
      })
      .catch(error => {
        // ❌ Handle login error
        setError('Invalid user email or password! Please type correct one.');
      });
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {/* 🧾 Login Form */}
      <form className="space-y-4" onSubmit={handleLogin}>
        {/* 📧 Email input field */}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          required
        />

        {/* 🔒 Password input field */}
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
          Login
        </button>

        {/* ⚠️ Error message display */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* 🔁 Link to registration page */}
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
