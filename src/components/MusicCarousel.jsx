import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import MusicSlide from "./MusicSlide";

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
import background11 from "../assets/workeleven.webp";

const slides = [
  {
    title: "NWABALI 2.0 (feat. Jeriq)",
    image: background11,
    link: "https://open.spotify.com/track/5orP2FcrsdmvktU46hvV9z?si=332c6f1b1d60483c",
    label: "Listen to Nwabali 2.0 now",
  },
  {
    title: "GG, Vol. 2: Lotstar",
    image: background9,
    link: "https://loti.lnk.to/GorimapaGangstaVolIILotstar",
    label: "Listen to Gorimapa Gangsta Volume two now",
  },
  {
    title: "Ahead Ahead",
    image: background7,
    link: "https://loti.lnk.to/AheadAhead",
    label: "Listen to Ahead Ahead now",
  },
  {
    title: "Move",
    image: background10,
    link: "https://open.spotify.com/track/7oiziqlPGo4hbMr6iAsRTu?si=ec44b0056c77426e",
    label: "Listen to Move on spotify now",
  },
  {
    title: "Closure",
    image: background8,
    link: "https://elitecolletive.fanlink.tv/closureLoti",
    label: "Listen to Closure now",
  },
  {
    title: "Honeymoon Phase",
    image: background5,
    link: "https://elitecollective.fanlink.tv/Honeymoonphase",
    label: "Listen to Honeymoon phase now",
  },
  {
    title: "Gorimapa Gangsta",
    image: background6,
    link: "https://elitecollective.fanlink.tv/GGVOL1",
    label: "Listen to Gorimapa gangsta now",
  },
  {
    title: "NWABALI (Single)",
    image: background1,
    link: "https://elitecollective.fanlink.tv/Nwabali",
    label: "Listen to nwabali now",
  },
  {
    title: "Sins & Scenes",
    image: background2,
    link: "https://eliteco.fanlink.tv/SINS_SCENES",
    label: "Listen to sins and scenes now",
  },
  {
    title: "Violent Times",
    image: background3,
    link: "https://ditto.fm/violent-times",
    label: "Listen to violent times",
  },
  {
    title: "Perfect Fantasy",
    image: background4,
    link: "https://eliteco.fanlink.tv/perfectFantasy",
    label: "Listen to perfect fantasy now",
  },
];

export default function MusicCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // hook MUST be called at top level
  const handlers = useSwipeable({
    onSwipedLeft: () => changeSlide(1),
    onSwipedRight: () => changeSlide(-1),
    trackMouse: true,
  });

  function changeSlide(dir) {
    setDirection(dir);
    setCurrent((prev) =>
      dir === 1
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  }

  return (
    <>
      <div className="mrtitle">
        <h1>Music</h1>
      </div>
      <div className="buns">
        <div className="music-carousel">
          <button
            className="music-carousel__arrow left"
            onClick={() => changeSlide(-1)}
          >
            &#8249;
          </button>

          <div
            className="music-carousel__viewport"
            {...handlers}
            style={{ touchAction: "pan-y" }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                className="music-carousel__slide"
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
                transition={{ duration: 0.25 }}
              >
                <MusicSlide {...slides[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="music-carousel__arrow right"
            onClick={() => changeSlide(1)}
          >
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
}
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import MusicSlide from "./MusicSlide";
// import background1 from "../assets/workone.webp";
// import background2 from "../assets/worktwo.webp";
// import background3 from "../assets/workthree.webp";
// import background4 from "../assets/workfour.webp";
// import background5 from "../assets/workfive.webp";
// import background6 from "../assets/worksix.webp";
// import background7 from "../assets/workseven.webp";
// import background8 from "../assets/workeight.webp";
// import background9 from "../assets/worknine.webp";
// import background10 from "../assets/workten.webp";

// const slides = [
//   {
//     title: "GG, Vol. 2: Lotstar",
//     image: background9,
//     link: "https://loti.lnk.to/GorimapaGangstaVolIILotstar",
//     label: "Listen to Gorimapa Gangsta Volume two now",
//   },
//   {
//     title: "Ahead Ahead",
//     image: background7,
//     link: "https://loti.lnk.to/AheadAhead",
//     label: "Listen to Ahead Ahead now",
//   },
//   {
//     title: "Move",
//     image: background10,
//     link: "https://open.spotify.com/track/7oiziqlPGo4hbMr6iAsRTu?si=ec44b0056c77426e",
//     label: "Listen to Move on spotify now",
//   },
//   {
//     title: "Closure",
//     image: background8,
//     link: "https://elitecolletive.fanlink.tv/closureLoti",
//     label: "Listen to Closure now",
//   },
//   {
//     title: "Honeymoon Phase",
//     image: background5,
//     link: "https://elitecollective.fanlink.tv/Honeymoonphase",
//     label: "Listen to Honeymoon phase now",
//   },
//   {
//     title: "Gorimapa Gangsta",
//     image: background6,
//     link: "https://elitecollective.fanlink.tv/GGVOL1",
//     label: "Listen to Gorimapa gangsta now",
//   },
//   {
//     title: "NWABALI (Single)",
//     image: background1,
//     link: "https://elitecollective.fanlink.tv/Nwabali",
//     label: "Listen to nwabali now",
//   },
//   {
//     title: "Sins & Scenes",
//     image: background2,
//     link: "https://eliteco.fanlink.tv/SINS_SCENES",
//     label: "Listen to sins and scenes now",
//   },
//   {
//     title: "Violent Times",
//     image: background3,
//     link: "https://ditto.fm/violent-times",
//     label: "Listen to violent times",
//   },
//   {
//     title: "Perfect Fantasy",
//     image: background4,
//     link: "https://eliteco.fanlink.tv/perfectFantasy",
//     label: "Listen to perfect fantasy now",
//   },
// ];

// const MusicCarousel = () => {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const next = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prev = () => {
//     setDirection(-1);
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <>
//       <div className="mrtitle">
//         <h1>Music</h1>
//       </div>
//       <div className="buns">
//         <div className="music-carousel">
//           <button className="music-carousel__arrow left" onClick={prev}>
//             &#8249;
//           </button>

//           <div className="music-carousel__viewport">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={current}
//                 className="music-carousel__slide"
//                 custom={direction}
//                 initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
//                 transition={{ duration: 0.25 }}
//               >
//                 <MusicSlide {...slides[current]} />
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <button className="music-carousel__arrow right" onClick={next}>
//             &#8250;
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MusicCarousel;
