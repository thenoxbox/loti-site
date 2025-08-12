const MusicSlide = ({ title, image, link, label }) => {
  return (
    <div className="music-slide">
      <h2 className="music-slide__title">{title}</h2>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="music-slide__image"
      />
      <a
        className="music-slide__button"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
      >
        OUT NOW
      </a>
    </div>
  );
};

export default MusicSlide;

// const MusicSlide = ({ title, image, link, label }) => {
//   return (
//     <div className="music-slide">
//       <h2 className="music-slide__title">{title}</h2>
//       <img
//         src={image}
//         alt={title}
//         className="music-slide__image"
//         loading="lazy"
//       />
//       <a
//         className="music-slide__button"
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={label}
//         title={label}
//       >
//         OUT NOW
//       </a>
//     </div>
//   );
// };

// export default MusicSlide;
