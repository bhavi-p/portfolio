import React from 'react'
import './about.css'
import ME from '../../assets/GitHProfSquare.jpeg'
import {FaPaintBrush} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiQuestionnaireLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>Me!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaPaintBrush className='about__icon' />
              <h5>Creative</h5>
              {/* <small>3+ Years Working Experience</small> */}
            </article>
            
            <article className="about__card">
              <RiQuestionnaireLine className='about__icon' />
              <h5>Inquisitive</h5>
              {/* <small>Web, Mobile, Design, &amp; more</small> */}
            </article>
            
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>User Centric</h5>
              {/* <small>Social Media, Marketing, Video</small> */}
            </article>
          </div>

          <p>I am a fast-paced, creative, inquisitive individual with over four years of technical experience. I studied Computer and Electrical Engineering at NC State University and have been playing a hybrid role of Systems Analyst and Scrum Master for the past two years. <br></br> <br></br> To further my passion for Web Development, I enrolled in a Full Stack bootcamp with MIT Emeritus. I strive to ideate creative, efficient solutions for web applications. Please explore my portfolio to view some of my latest projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About