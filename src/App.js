import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
 </Routes>
    </div>
  );
}

export default App;
