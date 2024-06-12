import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Skills</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Technology</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML5</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Java &amp; C</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Tools</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>MongoDB, ExpressJS, React, NodeJS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strapi, Postman, GraphQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma, Bootstrap, Tailwind</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Docker, Git, AWS S3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Jira, Datadog, Confluence</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Miscellaneous</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Agile</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Scrum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>DevOps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Problem Solving &amp; Collaboration</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
