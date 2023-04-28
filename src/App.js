import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/common/navbar/Navbar';
import Login from './components/context/login/Login';
import Register from './components/context/register/Register';

export default function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route exact path='/' Component={ Home } />
                <Route path='/components/pages/about/About'  Component={ About } />
                <Route path='/components/pages/contact/Contact' Component={ Contact } />
            </Routes>
            <Routes>
                <Route path='/components/context/login/Login' Component={ Login } />
                <Route path='/components/context/register/Register' Component={ Register } />
            </Routes>
        </BrowserRouter>
      </div>
    );
  }



 
