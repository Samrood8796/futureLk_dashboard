import Dashboard from "./pages/Dashboard/Dashboard";
import ForgottPassword from "./pages/ForgottPassword/ForgottPassword";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState({})
  useEffect(()=>{
    const user = localStorage.getItem("user")
    setUser(user)

  },[])
console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard /> }/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resetPassword' element={<ResetPassword />} ></Route>
          <Route path='/forgottPassword' element={<ForgottPassword />}></Route>
          <Route path='/success' element={<div className='text-3xl font-bold p-48 text-green-300'>check your email </div>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
