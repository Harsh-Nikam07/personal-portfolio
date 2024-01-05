import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './index.css'
import Cursoranimatin from './Components/Cursor/Cursoranimatin';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import WebProjects from './Components/WebProjects/WebProjects';
// import UiuxProjects from './Components/uiuxProjects/uiuxProjects';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <div className='container'>
      <Cursoranimatin/>
      <Navbar/>
      <Header/>
      <WebProjects/>
      {/* <UiuxProjects/> */}
      <Footer/>
    </div>
  )
}

export default App;
