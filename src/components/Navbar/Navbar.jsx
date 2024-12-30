import { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "nav-dark" : ""}`} ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>{t("navbar.home")}</li>
          <li>{t("navbar.tvShows")}</li>
          <li>{t("navbar.movies")}</li>
          <li>{t("navbar.newAndPopular")}</li>
          <li>{t("navbar.myList")}</li>
          <li className="language-selector">
            <div className="browse-languages">
              {t("navbar.browseByLanguages")}
              <span className="dropdown-arrow">▼</span>
            </div>
            <div className="language-dropdown">
              {i18n.language === "en_US" ? (
                <>
                  <p onClick={() => i18n.changeLanguage("zh_TW")}>
                    {t("navbar.languages.chinese")}
                  </p>
                  <p onClick={() => i18n.changeLanguage("en_US")}>
                    {t("navbar.languages.english")}
                  </p>
                </>
              ) : (
                <>
                  <p onClick={() => i18n.changeLanguage("en_US")}>
                    {t("navbar.languages.english")}
                  </p>
                  <p onClick={() => i18n.changeLanguage("zh_TW")}>
                    {t("navbar.languages.chinese")}
                  </p>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>{t("navbar.children")}</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navabr-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              {t("navbar.signOut")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
