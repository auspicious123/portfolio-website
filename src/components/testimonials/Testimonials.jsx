import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data=[
  { 
    avatar:AVTR1,
    name:'Tina snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci soluta vitae? Vitae reprehenderit quo, laboriosam laudantium quasi minus quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eius.'
  },
  {
    avatar:AVTR2,
    name:'Tina snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci soluta vitae? Vitae reprehenderit quo, laboriosam laudantium quasi minus quod.'
  },
  {
    avatar:AVTR3,
    name:'Tina snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci soluta vitae? Vitae reprehenderit quo, laboriosam laudantium quasi minus quod.'
  },
  {
    avatar:AVTR4,
    name:'Tina snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci soluta vitae? Vitae reprehenderit quo, laboriosam laudantium quasi minus quod.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      >
    {
      data.map(({avatar,name,review},index) =>{
        return(
          <SwiperSlide key={index} className="testimonial">
        <div className="client_avatar">
          <img src={avatar} />
        </div>
        <h5 className='client_name'>{name}</h5>
          <small className="client_review">
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