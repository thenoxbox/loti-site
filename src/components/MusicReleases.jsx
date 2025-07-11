// import React from "react";
// import MusicKards from "./MusicKards";
// import background1 from "../assets/workone.webp";
// import background2 from "../assets/worktwo.webp";
// import background3 from "../assets/workthree.webp";
// import background4 from "../assets/workfour.webp";
// // import background5 from "../assets/workfive.webp";
// // import background6 from "../assets/worksix.webp";
// const MusicReleases = () => {
//   return (
//     <div className="maxmusic">
//       <div className="mrtitle">
//         <h1>Music</h1>
//       </div>
//       <div className="maxflex">
//         <MusicKards bkg={background1} mtitle={"NWABALI (Single)"} />
//         <MusicKards bkg={background2} mtitle={"Sins & Scenes"} />
//         <MusicKards bkg={background3} mtitle={"Violent Times"} />
//         <MusicKards bkg={background4} mtitle={"Perfect Fantasy"} />
//         {/* <MusicKards bkg={background5} mtitle={"SONG FIVE"} />
//         <MusicKards bkg={background6} mtitle={"SONG SIX"} /> */}
//       </div>
//     </div>
//   );
// };

// export default MusicReleases;

// the above is my intial implemention (legacy)

import React from "react";
import { motion } from "framer-motion";
import MusicKards from "./cards/MusicKards";
import background1 from "../assets/workone.webp";
import background2 from "../assets/worktwo.webp";
import background3 from "../assets/workthree.webp";
import background4 from "../assets/workfour.webp";
import background5 from "../assets/workfive.webp";
import background6 from "../assets/worksix.webp";
import background7 from "../assets/workseven.webp";
import background8 from "../assets/workeight.webp";
import background9 from "../assets/worknine.webp";
import background10 from "../assets/workten.webp";

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const MusicReleases = () => {
  return (
    <div className="maxmusic">
      <div className="mrtitle">
        <h1>Music</h1>
      </div>
      <motion.div
        className="maxflex"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <MusicKards
          bkg={background9}
          mtitle={"GG, Vol. 2: Lotstar"}
          link="https://loti.lnk.to/GorimapaGangstaVolIILotstar"
          label={"Listen to Gorimapa Gangsta Volume two now"}
        />
        <MusicKards
          bkg={background7}
          mtitle={"Ahead Ahead"}
          link="https://loti.lnk.to/AheadAhead"
          label={"Listen to Ahead Ahead now"}
        />
        <MusicKards
          bkg={background10}
          mtitle={"Move"}
          link="https://open.spotify.com/track/7oiziqlPGo4hbMr6iAsRTu?si=ec44b0056c77426e"
          label={"Listen to Move on spotify now"}
        />
        <MusicKards
          bkg={background8}
          mtitle={"Closure"}
          link="https://elitecolletive.fanlink.tv/closureLoti"
          label={"Listen to Closure now"}
        />
        <MusicKards
          bkg={background5}
          mtitle={"Honeymoon Phase"}
          link="https://elitecollective.fanlink.tv/Honeymoonphase"
          label={"Listen to Honeymoon phase now"}
        />
        <MusicKards
          bkg={background6}
          mtitle={"Gorimapa Gangsta"}
          link="https://elitecollective.fanlink.tv/GGVOL1"
          label={"Listen to Gorimapa gangsta now"}
        />
        <MusicKards
          bkg={background1}
          mtitle={"NWABALI (Single)"}
          link="https://elitecollective.fanlink.tv/Nwabali"
          label={"Listen to nwabali now"}
        />
        <MusicKards
          bkg={background2}
          mtitle={"Sins & Scenes"}
          link="https://eliteco.fanlink.tv/SINS_SCENES"
          label={"Listen to sins and scenes now"}
        />
        <MusicKards
          bkg={background3}
          mtitle={"Violent Times"}
          link="https://ditto.fm/violent-times"
          label={"Listen to violent times"}
        />
        <MusicKards
          bkg={background4}
          mtitle={"Perfect Fantasy"}
          link="https://eliteco.fanlink.tv/perfectFantasy"
          label={"Listen to perfect fantasy now"}
        />
      </motion.div>
    </div>
  );
};

export default MusicReleases;
