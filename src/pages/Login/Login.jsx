import { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { signup, login } from "../../firebase";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [signState, setSignState] = useState(t("login.title"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (signState === t("login.title")) {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === t("login.name") ? (
            <input
              type="text"
              placeholder={t("login.name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <></>
          )}{" "}
          <input
            type="email"
            placeholder={t("login.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={t("login.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>{t("login.rememberMe")}</label>
            </div>
            <p>{t("login.needHelp")}</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === t("login.title") ? (
            <p>
              {t("login.newToNetflix")}{" "}
              <span onClick={() => setSignState(t("login.name"))}>
                {t("login.signUpNow")}
              </span>
            </p>
          ) : (
            <p>
              {t("login.newToNetflix")}{" "}
              <span onClick={() => setSignState(t("login.title"))}>
                {t("login.signIn")}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
