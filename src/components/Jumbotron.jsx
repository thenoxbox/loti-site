// import React from "react";

// const Jumbotron = ({ bkg }) => {
//   return (
//     <div
//       className="jmbotron"
//       style={{
//         backgroundImage: `url(${bkg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="jmbodisps">
//         <p>Latest release</p>
//         <h1>Ahead Ahead</h1>
//         <button>LISTEN NOW</button>
//       </div>
//     </div>
//   );
// };

// export default Jumbotron;
import React from "react";

const Jumbotron = () => {
  return (
    <div className="jmbotron">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/videos/theroots.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="jmbodisps">
        <p>Latest release</p>
        <h1>Okirika .ft Taves</h1>
        <a
          href="https://loti.lnk.to/GorimapaGangstaVolIILotstar"
          aria-label="listen to Okirika on GG volume 2 now"
          title="Listen Now"
          target="_blank"
          rel="noopener noreferrer"
        >
          LISTEN NOW
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
