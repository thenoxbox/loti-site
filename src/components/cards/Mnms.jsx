import React from "react";

const Mnms = ({ bkg, href, label, bread, crumbs, krumbs }) => {
  return (
    <div className="bigmanblast">
      <div
        className="blastoise"
        style={{
          backgroundImage: `url(${bkg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="lilblast">
        <h2>{bread}</h2>
        <p>{crumbs}</p>
        <a
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          READ MORE
          <span className="visually-hidden">{krumbs}</span>
        </a>
      </div>
    </div>
  );
};

export default Mnms;
