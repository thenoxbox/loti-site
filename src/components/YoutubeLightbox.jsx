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
          <img src={thumbnail} alt="Video thumbnail" />
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
