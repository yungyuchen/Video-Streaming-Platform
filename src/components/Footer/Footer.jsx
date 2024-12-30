import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>{t("footer.audioDescription")}</li>
        <li>{t("footer.helpCenter")}</li>
        <li>{t("footer.giftCards")}</li>
        <li>{t("footer.mediaCenter")}</li>
        <li>{t("footer.investorRelations")}</li>
        <li>{t("footer.jobs")}</li>
        <li>{t("footer.termsOfUse")}</li>
        <li>{t("footer.privacy")}</li>
        <li>{t("footer.legalNotices")}</li>
        <li>{t("footer.cookiePreferences")}</li>
        <li>{t("footer.corporateInformation")}</li>
        <li>{t("footer.contactUs")}</li>
      </ul>
      <p className="copyright-text">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
