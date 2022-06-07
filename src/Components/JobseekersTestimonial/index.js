import style from "./JobseekersTestimonial.module.scss";
import JobseekersTestimonialCard from "./JobseekersTestimonialCard";
import { peopleData } from "./peopleData";
import { Carousel } from "react-bootstrap";

const JobseekersTestimonial = () => {
  return (
    <div className={style.jobseekersTestimonial}>
      <div className={style.content}>
        <p className={style.heading}>Job-seeker's testimonials</p>
        <Carousel controls={false} fade={true} pause={false} indicators={false}>
          {peopleData.map((item, key) => {
            return (
              <Carousel.Item key={key} interval={4000}>
                <JobseekersTestimonialCard
                  img={item.img}
                  name={item.name}
                  info={item.info}
                  company={item.company}
                />
                {key}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default JobseekersTestimonial;
