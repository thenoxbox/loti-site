// import React from "react";

// const MusicKards = ({ bkg, mtitle, link }) => {
//   return (
//     <div className="mkbd">
//       <div
//         className="mksplash"
//         style={{
//           backgroundImage: `url(${bkg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>
//       <div className="mkdeets">
//         <h2>{mtitle}</h2>
//         <button onClick={() => (window.location.href = link)}>
//           LISTEN NOW
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MusicKards;


// my initial implementation

import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const MusicKards = ({ bkg, mtitle, link, label }) => {
  return (
    <motion.div
      className="mkbd"
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className="mksplash"
        style={{
          backgroundImage: `url(${bkg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="mkdeets">
        <h2>{mtitle}</h2>
        {/* <button onClick={() => (window.location.href = link)}>
          LISTEN NOW
        </button> */}
          <a
          href={link}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
        >LISTEN NOW</a>
      </div>
    </motion.div>
  );
};

export default MusicKards;
