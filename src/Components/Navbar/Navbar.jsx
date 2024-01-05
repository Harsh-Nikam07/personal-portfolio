import React, {useState} from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo_dark from '../../assets/img/harsh dev logo light.png'

const Navbar = () => {
    const [active, setActive] = useState('nav_menu');

    const navToggle = () =>{
        active === "nav_menu" 
        ?  setActive("nav_menu nav_active") 
        : setActive("nav_menu");


    }
  return (

    <div className='navbar'>
        <img src={logo_dark} alt="" className='logo'/>
        <h1>HARSH NIKAM</h1>
        <ul className={active}>
            <li className='nav_item'><Link to="hero" spy={true} smooth={true} offset={50} duration={500} className='nav_link'>HOME</Link></li>
            <li className='nav_item'><Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className='nav_link'>PROJECTS</Link></li>
            <li className='nav_item'><Link to="about" spy={true} smooth={true} offset={100} duration={500} className='nav_link'>ABOUT</Link></li>
            <li className='nav_item'><Link to="contact" spy={true} smooth={true} offset={100} duration={500} className='nav_link'>CONTACT</Link></li>
        </ul>

        <div onClick={navToggle} className='nav_toggler'>
            <div className='line1'></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </div>


  )
}

export default Navbar