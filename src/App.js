import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
 </Routes>
    </div>
  );
}

export default App;
