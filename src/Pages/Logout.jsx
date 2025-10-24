// 🔐 Import Firebase signOut method and auth initializer
import { getAuth, signOut } from 'firebase/auth';

// 🔌 Import Firebase app instance
import { app } from '../Firebase/Firebase.Config';

const Logout = () => {
  // 🔐 Get Firebase Auth instance
  const auth = getAuth(app);

  // 📝 Handle logout button click
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // ✅ Sign-out successful
        alert('User signed out successfully!');
      })
      .catch(error => {
        // ❌ Handle sign-out error
        console.log(error.message);
      });
  };

  return (
    <div>
      {/* 🚪 Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
