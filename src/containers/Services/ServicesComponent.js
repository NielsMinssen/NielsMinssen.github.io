import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";
import { servicesSection } from "../../portfolio";
import './ServicesComponent.scss';



const ServiceBox = ({ title, description }) => (
  <div className="service-box">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default function ServicesComponents() {
  const { isDark } = useContext(StyleContext);
  const { t } = useTranslation();
  const ServicesComponent = () => (
    <div className="services-container">
      {servicesSection.services.map((display,i) => {
        return (
          <ServiceBox 
            key={i}
            isDark={isDark}
            title = {t(`servicesSection.services.${i}.title`)}
            description={t(`servicesSection.services.${i}.description`)}
          />
        );
      })}
    </div>
  );
  if (!servicesSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="services">
      <div>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {t("services.title")}{" "}
            </h1>
          </div>
          <ServicesComponent />
        </Fade>
      </div>
    </div>
  );
}
