import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/HeaderPic_nobg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Bhavi</h1>
        <h4 className="text-light">Full-Stack Developer</h4>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'> Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header