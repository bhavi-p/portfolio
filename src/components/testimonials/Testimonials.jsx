import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



const data = [
  {
    avatar: AVTR1,
    name: 'Lorem, ipsum.',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    avatar: AVTR2,
    name: 'Lorem, ipsum.',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    avatar: AVTR3,
    name: 'Lorem, ipsum.',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
  {
    avatar: AVTR4,
    name: 'Lorem, ipsum.',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam voluptas sunt modi facere obcaecati odio iste beatae expedita reiciendis deserunt ut, quisquam explicabo? Autem sequi a officiis harum illo.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
          {
            data.map(({ avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>

                  <h5 className='client__name'>{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
                </SwiperSlide>
              )
            })
          }            
      </Swiper>
    </section>
  )
}

export default Testimonials