import { useState } from "react";
import { Link } from "react-scroll";
import style from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../Assets/images/aviate-logo.png";

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <div className={style.header} id="header">
      <img src={logo} className={style.logo} alt="logo" />
      {isMobile && (
        <MenuOutlined
          style={{ color: "white" }}
          onClick={() => setHamburgerClicked((prev) => !prev)}
        />
      )}
      {(!isMobile || hamburgerClicked) && (
        <div className={style.menu}>
          <div className={style.options}>
            <Link to="header">Home</Link>
          </div>
          <div className={style.options}>
            <Link to="for_employers">For Employers</Link>
          </div>
          <div className={style.options}>
            <Link to="footer">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
