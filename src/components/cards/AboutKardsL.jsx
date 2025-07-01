import React from "react";

const AboutKardsL = ({ bkg, abtexts }) => {
  return (
    <div className="abtsplashtwo">
      <div
        className="wimage"
        style={{
          backgroundImage: `url(${bkg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="abkontent-l">
        <p>{abtexts}</p>
      </div>
    </div>
  );
};

export default AboutKardsL;

