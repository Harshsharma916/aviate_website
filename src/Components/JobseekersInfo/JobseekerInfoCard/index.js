import style from "./JobseekerInfoCard.module.scss";

export const JobseekerInfoCard = ({ img, heading, info }) => {
  return (
    <div className={style.card}>
      <div src={img} className={style.img} alt="Info Img"/>
      <div className={style.content}>
        <p className={style.heading}>{heading}</p>
        <p className={style.info}>{info}</p>
      </div>
    </div>
  );
};

export const JobseekerInfoCardReverse = ({ img, heading, info }) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <p className={style.heading}>{heading}</p>
        <p className={style.info}>{info}</p>
      </div>
      <div src={img} className={style.img} alt="Info Img"/>
    </div>
  );
};
