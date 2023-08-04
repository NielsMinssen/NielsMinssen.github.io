import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";

export default function WorkExperience() {
  const { t } = useTranslation();
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: t(`workExperiences.experience.${i}.company`),
                      desc: t(`workExperiences.experience.${i}.desc`),
                      date: t(`workExperiences.experience.${i}.date`),
                      companylogo: card.companylogo,
                      role: t(`workExperiences.experience.${i}.role`),
                      descBullets: card.descBullets.map((bullet, j) => t(`workExperiences.experience.${i}.descBullets.${j}`))
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
