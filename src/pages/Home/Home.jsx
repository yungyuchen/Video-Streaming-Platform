import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>{t("home.heroDescription")}</p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              {t("home.play")}
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              {t("home.moreInfo")}
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={t("home.blockbuster")} category={"top_rated"} />
        <TitleCards title={t("home.netflixOnly")} category={"popular"} />
        <TitleCards title={t("home.upcoming")} category={"upcoming"} />
        <TitleCards title={t("home.topPicks")} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
