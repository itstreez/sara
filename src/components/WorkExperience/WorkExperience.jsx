import React from "react";
import "./WorkExperience.css";
import mls from "../../assets/logocarmel.jpeg";
import usj from "../../assets/usj.jpeg";
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
      <h2>Education</h2>
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
            <img src={usj} alt="istay" />
          </div>
          <h4 className="client__name"> Saint Joseph University of Beyrouth</h4>
          <h5 className="client__name"> September 2021 - May 2024</h5>
          <small className="client__review">
          BA in Translation
          </small>
        </SwiperSlide>

        <SwiperSlide className="work">
          <div className="work__avatar">
            <img src={mls} alt="liaison" />
          </div>
          <h4 className="client__name"> Carmel Saint Joseph</h4>
          <h5 className="client__name"> September 2006 - May 2021 </h5>
          <small className="client__review">
          Awarded very good with distinction
          </small>
        </SwiperSlide>

      
      </Swiper>
    </section>
  );
};
export default WorkExperience;
