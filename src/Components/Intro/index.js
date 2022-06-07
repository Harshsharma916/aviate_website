import style from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={style.intro}>
      <div className={style.content}>
        <div className={style.intro_text}>
          <p className={style.heading}>
            Finding the right job isn't fate, it's navigation!
          </p>
          <p className={style.info}>
            Aviate is a preparation and mentorship platform for job-seekers that
            are seeking non-technical roles across top companies!
          </p>
          <div className={style.intro_buttons}>
            <button className={style.button_1}>Get Hired</button>
            <button className={style.button_2}>Hire from us</button>
          </div>
        </div>
        {/* <img className={style.intro_image} /> */}
      </div>
    </div>
  );
};

export default Intro;
