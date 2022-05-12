import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Home/Shared/Footer/Footer';
import Navber from './pages/Home/Shared/Navber/Navber';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
