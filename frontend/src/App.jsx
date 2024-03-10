import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { useEffect,useState } from "react";
import axios from "axios";


function App() {
  // const [isAuthenticated,setIsAuthenticated]=useState(false);
  // useEffect(()=>{
  //   async function fetch(){
  //     const response=await axios.get("http://localhost:3000/api/v1/me",{
  //     headers:{
  //       Authorization:"Bearer "+ localStorage.getItem("token")
  //     }
  //   })
  //   if(response.data.authentication){
  //     setIsAuthenticated(true);
  //   }
  //   }
  //   fetch(); 
  // },[])
  return (
    <>
       <BrowserRouter>
       {/* {isAuthenticated ? (
          <Navigate to="/dashboard" />
        ) : (
          <Navigate to="/signin" />
        )} */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App