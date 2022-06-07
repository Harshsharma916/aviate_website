import style from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={style.intro} id="home">
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
            <button
              className={style.button_1}
              onClick={() =>
                window.open("https://qrate.typeform.com/to/vyP7iP6W", "_blank")
              }
            >
              Get Hired
            </button>
            <button
              className={style.button_2}
              onClick={() =>
                window.open("https://qrate.typeform.com/to/VQL2WH0H", "_blank")
              }
            >
              Hire from us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
