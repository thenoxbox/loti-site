import React from "react";
import { motion } from "framer-motion";
import YoutubeLightbox from "./YoutubeLightbox";

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const VideoSection = () => {
  return (
    <div className="manhan">
      <div className="haman">
        <h1>Videos</h1>
      </div>
      <motion.div
        className="hamanposts"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          // map pattern is optional if you want to clean this later
          {
            id: "1",
            videoId: "6wTnlM44h4Q",
            thumbnail:
              "https://img.youtube.com/vi/6wTnlM44h4Q/maxresdefault.jpg",
            title: "Loti - Okirika ft. taves",
          },
          {
            id: "2",
            videoId: "nIdvxMLs7Jo",
            thumbnail:
              "https://img.youtube.com/vi/nIdvxMLs7Jo/maxresdefault.jpg",
            title: "Loti - Ahead Ahead (Official Video)",
          },
          {
            id: "3",
            videoId: "CtFo44gvisQ",
            thumbnail: "https://img.youtube.com/vi/CtFo44gvisQ/hqdefault.jpg",
            title: "Loti - Move ft. Moliy",
          },
          {
            id: "4",
            videoId: "b1-uNy3ZLc0",
            thumbnail: "https://img.youtube.com/vi/b1-uNy3ZLc0/hqdefault.jpg",
            title: "Loti - Mainland (Official Video)",
          },
        ].map((video) => (
          <motion.div
            key={video.id}
            className="bigmanblast"
            variants={itemVariants}
          >
            <YoutubeLightbox
              id={video.id}
              videoId={video.videoId}
              thumbnail={video.thumbnail}
            />
            <div className="lilblast tatata">
              <h2>{video.title}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VideoSection;

// import React from "react";
// import YoutubeLightbox from "./YoutubeLightbox";

// const VideoSection = () => {
//   return (
//     <>
//       <div className="manhan">
//         <div className="haman">
//           <h1>Videos</h1>
//         </div>
//         <div className="hamanposts">
//           <div className="bigmanblast">
//             <YoutubeLightbox
//               id="1"
//               videoId="6wTnlM44h4Q"
//               thumbnail="https://img.youtube.com/vi/6wTnlM44h4Q/maxresdefault.jpg"
//             />
//             <div className="lilblast tatata">
//               <h2>Loti - Okirika ft. taves</h2>
//             </div>
//           </div>
//           <div className="bigmanblast">
//             <YoutubeLightbox
//               id="2"
//               videoId="nIdvxMLs7Jo"
//               thumbnail="https://img.youtube.com/vi/nIdvxMLs7Jo/maxresdefault.jpg"
//             />
//             <div className="lilblast tatata">
//               <h2>Loti - Ahead Ahead (Official Video)</h2>
//             </div>
//           </div>
//           <div className="bigmanblast">
//             <YoutubeLightbox
//               id="3"
//               videoId="CtFo44gvisQ"
//               thumbnail="https://img.youtube.com/vi/CtFo44gvisQ/hqdefault.jpg"
//             />
//             <div className="lilblast tatata">
//               <h2>Loti - Move ft. Moliy</h2>
//             </div>
//           </div>
//           <div className="bigmanblast">
//             <YoutubeLightbox
//               id="4"
//               videoId="b1-uNy3ZLc0"
//               thumbnail="https://img.youtube.com/vi/b1-uNy3ZLc0/hqdefault.jpg"
//             />
//             <div className="lilblast tatata">
//               <h2>Loti - Mainland (Official Video)</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoSection;
