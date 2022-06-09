import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Sponsors.module.scss";
import { useMediaQuery } from "react-responsive";
import { logoData } from "./logoData";

function Sponsors() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  let settings = {
    dots: false,
    infinite: true,
    vertical: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  // if (isMobile) {
  //   settings.slidesToShow = 1;
  //   console.log(settings,isMobile)
  // }
  return (
    <div className={style.sponsors}>
      <p className={style.heading}>Our hiring partners</p>
      <Slider {...settings}>
        <div className={style.logo}>
          {logoData[0].map((item, key) => {
            return (
              <img key={key} src={item} alt="logo" className={style.logo_img} />
            );
          })}
        </div>
        <div className={style.logo}>
          {logoData[1].map((item, key) => {
            return (
              <img key={key} src={item} alt="logo" className={style.logo_img} />
            );
          })}
        </div>
        <div className={style.logo}>
          {logoData[2].map((item, key) => {
            return (
              <img key={key} src={item} alt="logo" className={style.logo_img} />
            );
          })}
        </div>
        <div className={style.logo}>
          {logoData[3].map((item, key) => {
            return (
              <img key={key} src={item} alt="logo" className={style.logo_img} />
            );
          })}
        </div>
      </Slider>
      <div className={style.promotion}>
        <p>Join our family and find your deserving candidate.</p>
        <button
          onClick={() =>
            window.open("https://qrate.typeform.com/to/VQL2WH0H", "_blank")
          }
        >
          Hire from us
        </button>
      </div>
    </div>
  );
}

export default Sponsors;
