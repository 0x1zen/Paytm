import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { useEffect } from "react";


function App() {
  // const token = localStorage.getItem('token');
  // useEffect(() => {
  //   if (token && window.location.pathname !== '/dashboard') {

  //     window.location.href = '/dashboard';
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

