import style from "./Footer.module.scss";
import logo from "../../Assets/images/aviate.png";

export default function Footer() {
  return (
    <div className={style.footer} id="footer">
      <div className={style.content}>
        <img src={logo} className={style.logo}/>
        <div className={style.info}>
          <div className={style.about}>
            <p className={style.about_text}>
              Aviate is a preparation and mentorship platform for job-seekers
              that are seeking non-technical roles across top companies!
            </p>
            <div className={style.about_buttons}>
              <button>Terms & Conditions</button>
              <button>Privacy Policy</button>
            </div>
          </div>
          <div className={style.address}>
            <p className={style.address_text}>
              Aviate Education Private Limited,
              <br />
              91-Springboard,2nd Floor, Opp Broadway Book Store, St-Inez,
              Panaji-Goa, 403001
            </p>
            <p className={style.email}>info@aviate.jobs</p>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        Copyright © 2021 All rights reserved to Aviate Education PVT LTD
      </div>
    </div>
  );
}
