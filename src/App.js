import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Navber from './pages/Home/Shared/Navber/Navber';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
