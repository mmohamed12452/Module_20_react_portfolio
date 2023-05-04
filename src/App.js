import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';
import PreLoader from './components/PreLoader';
import Projects from './pages/Projects';
import Contact from  './pages/Contact';
import Footer from './pages/Footer';
import Resume from './pages/Resume';
import ScrollToTop from './ScrollToTop';

import './App.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (  
      <Router>
    <PreLoader load={load}/>
    <div className='App' id={load?"no-scroll":"scroll"}>
      <NavBar/>
      <ScrollToTop/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={ <Projects/>} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="*" element={<Navigate to="/"/>} />
       </Routes>
       <Footer/>
     </div>    
   </Router>
  );
}

export default App;
