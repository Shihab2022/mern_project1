import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import Reset from './pages/Login/Reset';
import Navbar from './pages/Navbar/Navbar';
import Product from './pages/Product';

function App() {
  return (
    <div>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/product' element={<RequireAuth><Product/></RequireAuth>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/default' element={<DefaultPage/>}></Route>
  <Route path='/reset' element={<Reset/>}></Route>

 </Routes>
 
    </div>
  );
}

export default App;
