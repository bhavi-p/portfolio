import React from 'react'
import './testimonials.css'


// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SIDE1 from '../../assets/AppleGif.gif'
import SIDE2 from '../../assets/CoffeeCup.jpg'
import SIDE3 from '../../assets/ChestPress.gif'
import SIDE4 from '../../assets/Where_we_met.jpg'
import SIDE5 from '../../assets/GearUp.gif'
import SIDE6 from '../../assets/Champions.gif'



const data = [
  {
    project: SIDE1,
    name: 'Apple Logo',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    project: SIDE2,
    name: 'Coffee Cup',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    project: SIDE3,
    name: 'Chest Press',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    project: SIDE4,
    name: 'Where We Met',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    project: SIDE5,
    name: 'Gear Up',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    project: SIDE6,
    name: 'Gear for Champions',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Just for Fun</h5>
      <h2>Graphics &amp; Animations</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       navigation={true}
       modules={[Pagination, Navigation]}
       pagination={ false }>
          {
            data.map(({ project, name, review}, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="side__project">
                    <img src={project} alt={name} />
                  </div>
                </SwiperSlide>
              )
            })
          }            
      </Swiper>
    </section>
  )
}

export default Testimonials