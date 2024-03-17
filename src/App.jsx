
import {BrowserRouter,Routes,Route }from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignUp';
import Profile from './pages/Profile';
import Signup from './pages/SignUp';
import About from './pages/About';

export default function App() {
  return  <BrowserRouter>
  <Routes>
    <Route path = "/" element ={<Home/>} />
    <Route path = "/sign-in" element ={<SignIn />} />
    <Route path = "/sign-up" element ={<Signup />} />
    <Route path = "/profile" element ={<Profile />} />
    <Route path = "/about" element ={<About />} />
    
    
    </Routes></BrowserRouter>;
  
}