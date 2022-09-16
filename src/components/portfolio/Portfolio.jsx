import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/BadBankImg.jpg'
import IMG2 from '../../assets/PacMenImg.jpg'
import IMG3 from '../../assets/ToDoImg.jpg'
import IMG4 from '../../assets/BusTrackImg.jpg'
import IMG5 from '../../assets/MovingEyesImg.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'BadBank Portal',
    github: 'https://github.com/bhavi-p/BadBank',
    demo: 'https://bhavi-p.github.io/BadBank/#/',
    figma: 'https://figma.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'PacMen Factory',
    github: 'https://github.com/bhavi-p/PacMan',
    demo: 'https://bhavi-p.github.io/PacMan/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'ToDo List (Angular)',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'MIT Bus Tracker',
    github: 'https://github.com/bhavi-p/Bus-Tracker',
    demo: 'https://bhavi-p.github.io/Bus-Tracker/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Moving Eyes',
    github: 'https://github.com/bhavi-p/MovingEyes',
    demo: 'https://bhavi-p.github.io/MovingEyes/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Food Ordering App',
    github: 'https://github.com',
    demo: 'https://google.com',
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item_image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>GitHub</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

// <article className="portfolio__item">
{/* <div className="portfolio__item_image">
<img src={IMG1} alt="" />
</div>

<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="" className="btn" target='_blank'>GitHub</a>
<a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
</div>
</article>

<article className="portfolio__item">
<div className="portfolio__item_image">
<img src={IMG2} alt="" />
</div>

<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="" className="btn" target='_blank'>GitHub</a>
<a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
</div>
</article>

<article className="portfolio__item">
<div className="portfolio__item_image">
<img src={IMG3} alt="" />
</div>

<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="" className="btn" target='_blank'>GitHub</a>
<a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
</div>
</article>

<article className="portfolio__item">
<div className="portfolio__item_image">
<img src={IMG4} alt="" />
</div>

<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="" className="btn" target='_blank'>GitHub</a>
<a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
</div>
</article>

<article className="portfolio__item">
<div className="portfolio__item_image">
<img src={IMG5} alt="" />
</div>

<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="" className="btn" target='_blank'>GitHub</a>
<a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
</div>
</article>

<article className="portfolio__item">
<div className="portfolio__item_image">
<img src={IMG6} alt="" />
</div>

<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="" className="btn" target='_blank'>GitHub</a>
<a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
</div>
</article> */}