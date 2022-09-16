import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/bhavika-patel-nc" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/bhavi-p" target='_blank'><FaGithub /></a>
        {/* <a href="https://figma.com" target='_blank'><FiFigma /></a> */}
        <a href="mailto:bhavikapatel0313@gmail.com" target="_blank"><FiMail /></a>
    </div>
  )
}

export default HeaderSocials