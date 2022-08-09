import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position='bottom-center'/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
