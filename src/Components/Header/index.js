import { useState } from "react";
import { Link } from "react-scroll";
import style from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../Assets/images/aviate-logo.png";

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [navbar,setNavbar] = useState({background:"transparent"});
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  function changeNavbarBg(){
    let scrollVal = window.scrollY;
    if(scrollVal>20){
      setNavbar({background:"rgb(21, 36, 60)"})
    }else{
      setNavbar({background:"transparent"})
    }
  }

  window.addEventListener("scroll",changeNavbarBg)

  return (
    <div className={style.header} style={navbar}>
      <img src={logo} className={style.logo} alt="logo" />
      {isMobile && (
        <MenuOutlined
          style={{ color: "white" }}
          onClick={() => setHamburgerClicked((prev) => !prev)}
        />
      )}
      {(!isMobile || hamburgerClicked) && (
        <div className={style.menu}>
          <Link to="home">
            <div className={style.options}>Home</div>
          </Link>

          <Link to="for_employers">
            <div className={style.options}>For Employers</div>
          </Link>

          <Link to="footer">
            <div className={style.options}>Contact Us</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
