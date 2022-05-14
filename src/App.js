import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Makeappointment from './pages/Home/Appointment/Makeappointment';
import Home from './pages/Home/Home/Home';
import Navber from './pages/Home/Shared/Navber/Navber';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Makeappointment></Makeappointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
