import React from 'react'

import { Link } from 'react-scroll';

import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import dev_logo from '../../assets/img/harsh dev logo light.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer-container' id='contact'>
            <div className='contact-form'>
                <h1>LET'S GET IN TOUCH</h1>
                <form action="">
                    <input type="text" placeholder='FULL NAME' />
                    <input type="email" placeholder='EMAIL ADDRESS'/>
                    <button type='submit'>SEND</button>
                </form>
            </div>
            <div className='footer'>
                <div className='links'>
                    <div className='link-icons'>
                        <FaDribbble className='link1'  color='black'/>
                        <FaBehance className='link1' color='black'/>
                        <FaInstagram className='link1' color='black'/>
                        <FaYoutube className='link1' color='black'/>
                        <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className='nav_link'><FaArrowUp className='link1' color='black'/></Link>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Footer