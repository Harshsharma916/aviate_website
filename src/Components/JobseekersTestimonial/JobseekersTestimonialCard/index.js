import style from "./JobseekersTestimonialCard.module.scss";

const JobseekersTestimonialCard = ({img,info,name,company}) =>{
  const {designation,logo} = company;

  return(
    <div className={style.card}>
      <img src={img} className={style.img} alt="Info Img"/>
      <div className={style.content}>
        <p className={style.info}>{info}</p>
        <p className={style.name}>{name}</p>
        <div className={style.company}>
          <p className={style.designation}>{designation}</p>
          <img className={style.logo} src={logo}/>
        </div>
      </div>
    </div>
  )
}


export default JobseekersTestimonialCard;