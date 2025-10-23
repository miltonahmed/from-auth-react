import { Outlet } from "react-router";

const Auth = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <main>
        <Outlet/>
     </main>
    </div>
  );
}

export default Auth