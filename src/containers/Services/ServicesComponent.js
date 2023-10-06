import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

import './ServicesComponent.scss';

const services = [
    { title: "Data Analysis and Visualization", description: "Analyze data to extract insights, providing custom visual reports or interactive dashboards tailored to client needs." },
    { title: "Machine Learning Model Development", description: "Design and deploy models tailored to specific business challenges like predictive analytics or recommendation systems." },
    { title: "Database Design and Management", description: "Design, set up, and manage optimized databases ensuring data integrity, security, and efficient retrieval." },
    { title: "Data Cleaning and Pre-processing", description: "Transform raw data into a usable format, ensuring data consistency and quality." },
    { title: "Data Integration and ETL Processes", description: "Implement data integration solutions and automate data pipelines for efficient data transfer." },
    { title: "Data-driven Web Application Development", description: "Develop custom web applications that offer dynamic, data-driven insights for users." },
];

const ServiceBox = ({ title, description }) => (
    <div className="service-box">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const ServicesComponent = () => (
    <div className="services-container">
        {services.map(service => <ServiceBox key={service.title} {...service} />)}
    </div>
);


export default function ServicesComponents() {
    const {isDark} = useContext(StyleContext);
    const { t } = useTranslation();
    //if (!skillsSection.display) {
    //  return null;
    //}
    return (
      <div className={isDark ? "dark-mode main" : "main"} id="skills">
        <div id="services">
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
