import React from "react";
import "./WorkExperience.css";
import transmed from "../../assets/totyota.jpeg";
import transmed2 from "../../assets/TWG_Tea_logo.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h5>Briefing</h5>
      <h2>Experience</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={40}
        modules={[Pagination]}
        className="mySwiper container work__container"
      >

<SwiperSlide className="work">
          <div className="work__avatar">
            <img src={transmed} alt="toyota" />
          </div>
          <h4 className="client__name"> Internship at Toyota</h4>
        
          <small className="client__review">
          Resource Guide for Toyota’s Obeya Program.
          </small>
          <small className="client__review">
          Manual for Toyota’s Obeya Program.
          </small>
        </SwiperSlide>   

        <SwiperSlide className="work">
          <div className="work__avatar">
            <img src={transmed2} alt="toyota" />
          </div>
          <h4 className="client__name"> Proofreading/ Editing/ Translation (English/ Arabic
language variation)</h4>
        
          <small className="client__review">
          TWG Tea Company website- Singapore
          </small>
        </SwiperSlide>     
      </Swiper>
    </section>
  );
};
export default WorkExperience;
