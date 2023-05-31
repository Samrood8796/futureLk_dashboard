import Dashboard from "./pages/Dashboard/Dashboard";
import ForgottPassword from "./pages/ForgottPassword/ForgottPassword";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResetPassword from "./pages/ResetPassword/ResetPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
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
