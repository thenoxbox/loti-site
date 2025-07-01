import React from "react";
import AboutKardsR from "./cards/AboutKardsR";
import AboutKardsL from "./cards/AboutKardsL";
import background1 from "../assets/aboutfirst.webp";
import background2 from "../assets/aboutmid.webp";
import background3 from "../assets/aboutlast.webp";

const AboutSection = () => {
  return (
    <div className="abtparent">
      <div className="abtwittle">
        <h1>About</h1>
      </div>
      <div className="abtkontent">
        <AboutKardsL
          bkg={background1}
          abtexts={
            "Emelie Dan-Nwabueze, professionally known as Loti, is a rising force in the Nigerian music scene. Born in Lagos, Nigeria, on November 19, 1998, Loti officially launched his music career in 2020 with the debut project Sins & Scenes, a collaboration with producer KD. Since then, Loti has continued to make waves with his genre-blending style and storytelling flair that transcends conventional musical boundaries."
          }
        />
        <AboutKardsR
          bkg={background2}
          abtexts={
            "His breakthrough came with the critically acclaimed EP Gorimapa Gangsta, featuring the standout single “Mainland.” The track’s visuals amassed over 50,000 views on YouTube, earned airplay on terrestrial and satellite TV networks across West and East Africa, and sparked the viral #MainlandChallenge, which generated over 2 million social media interactions. Loti built on this momentum with Honeymoon Phase, a genre-defying project that cemented his reputation as a boundary-pushing creative in Nigeria’s dynamic music landscape."
          }
        />
        <AboutKardsL
          bkg={background3}
          abtexts={
            "Loti's latest musical offering, a powerful single titled Nwabali (Stay Sharp), teases his forthcoming EP and stands as an ode to the resilience, street wisdom, and quick thinking needed to survive the fast-paced, dog-eat-dog environment of Lagos, Nigeria. Whether through the raw honesty of Gorimapa Gangsta, the emotional depth of Honeymoon Phase, or the sharp realism of Nwabali, Loti continues to establish himself as a visionary voice — a true Gorimapa Gangsta whose music resonates across borders and cultures."
          }
        />
      </div>
    </div>
  );
};

export default AboutSection;
