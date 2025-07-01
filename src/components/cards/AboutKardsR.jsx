import React from "react";

const AboutKardsR = ({ bkg, abtexts }) => {
  return (
    <div className="abtsplash">
      <div
        className="wimage"
        style={{
          backgroundImage: `url(${bkg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="abkontent-r">
        <p>{abtexts}</p>
      </div>
    </div>
  );
};

export default AboutKardsR;
