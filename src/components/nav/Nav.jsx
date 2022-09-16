import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {VscFileSubmodule} from 'react-icons/vsc'
import {FaTools} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div class="tooltip">
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <span class="tooltiptext">Home</span>
      </div>

      <div class="tooltip">
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <span class="tooltiptext">About</span>
      </div>
      
      <div class="tooltip">
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaTools /></a>
        <span class="tooltiptext">Skills</span>
      </div>
      
      <div class="tooltip">
        <a href="#portfolio" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><VscFileSubmodule /></a>
        <span class="tooltiptext">Portfolio</span>
      </div>
      
      <div class="tooltip">
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
        <span class="tooltiptext">Contact</span>
      </div>
    </nav>
  )
}

export default Nav