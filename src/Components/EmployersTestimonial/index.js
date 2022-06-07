import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { peopleData } from "./peopleData";
import EmployerTestimonialCard from "./EmployerTestimonialCard";
import style from "./EmployersTestimonial.module.scss";
import { useMediaQuery } from "react-responsive";

function EmployersTestimonial() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false,
  };

  if (isMobile) {
    settings.slidesToShow = 1;
    console.log(settings,isMobile)
  }
  return (
    <div className={style.employersTestimonial}>
      <p className={style.heading}>Employers' testimonials</p>
      <Slider {...settings} style={{ borderRadius: "50px" }}>
        {peopleData.map((item, key) => {
          return (
            <EmployerTestimonialCard
              img={item.img}
              company={item.company}
              name={item.name}
              info={item.info}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default EmployersTestimonial;
