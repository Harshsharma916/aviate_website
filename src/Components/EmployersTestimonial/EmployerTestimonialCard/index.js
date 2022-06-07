import style from "./EmployerTestimonialCard.module.scss";

function EmployerTestimonialCard({info,img,company,name}) {
  const {designation,logo} = company
  return (
    <div className={style.card}>
      <div className={style.content}>
        <p className={style.info}>{info}</p>
      </div>
      <div className={style.details}>
        <img src={img} className={style.img} alt="Person Img" />
        <div className={style.company}>
          <p className={style.name}>{name}</p>
          <p className={style.designation}>{designation}</p>
          <img className={style.logo} src={logo} />
        </div>
      </div>
    </div>
  );
}

export default EmployerTestimonialCard;
