import React, { useState, useEffect } from "react";

const YoutubeLightbox = ({ videoId, thumbnail }) => {
  const [open, setOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <div className="lightbox-trigger" onClick={() => setOpen(true)}>
        {thumbnail ? (
          // <img src={thumbnail} alt="Video thumbnail" />
          <div
            className="ken"
            style={{
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39.01"
              height="39.01"
              viewBox="0 0 39.01 39.01"
            >
              <defs>
                <style>{`.a { fill: #fff; }`}</style>
              </defs>
              <path
                className="a"
                d="M1004,104.5a19.5,19.5,0,1,1,19.5,19.5A19.5,19.5,0,0,1,1004,104.5Zm2.808,0a16.7,16.7,0,1,0,16.7-16.7A16.715,16.715,0,0,0,1006.8,104.5Zm10.675-10.862,16.537,10.863-16.537,10.862Z"
                transform="translate(-1003.996 -84.994)"
              />
            </svg>
          </div>
        ) : (
          <button>▶ Watch</button>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div className="lightbox-overlay" onClick={() => setOpen(false)}>
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0`}
              title="YouTube player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default YoutubeLightbox;
