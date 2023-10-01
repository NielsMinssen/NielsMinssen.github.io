import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import graph from "../../assets/lottie/graph"
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const { t } = useTranslation(); // Use the useTranslation hook

  if (!greeting.displayGreeting) {
    return null;
  }

  // Use t('translationKey') to access translations
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {t("greeting.title")}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {t("greeting.subTitle")}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={t("greeting.contactMe")} href="#contact" /> 
                {greeting.resumeLink && (
                  <Button
                    text={t("greeting.seeResume")} 
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
                {greeting.cvLink && (
                  <Button
                    text={t("greeting.seeCV")} 
                    newTab={true}
                    href={greeting.cvLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={graph} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
