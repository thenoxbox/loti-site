import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mirage } from "ldrs/react";
import "ldrs/react/Mirage.css";
import {
  faInstagram,
  faTwitter as faXTwitter,
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const checkboxRef = useRef(null); // ✅ Ref for checkbox

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    emailjs
      .send(
        "service_6go86c7",
        "template_o46gjk5",
        { user_email: email },
        "_m-ZAVRwUwTb8ZFFy"
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setEmail(""); // ✅ Reset email
        if (checkboxRef.current) checkboxRef.current.checked = false; // ✅ Reset checkbox
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Email send failed:", err);
      });
  };

  return (
    <div className="newsec">
      <div className="headnlinks">
        <h1>Subscribe for updates</h1>
        <div className="winkers">
          <a href="https://www.instagram.com/lotst4r/" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/LotStar" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://open.spotify.com/artist/68vnTeEFYHwyYIviDda37B?si=PbW5rN__QMy5Ss8AqTOQ4A"
            aria-label="Spotify"
          >
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a
            href="https://music.apple.com/ng/artist/loti/1362893117"
            aria-label="Apple"
          >
            <FontAwesomeIcon icon={faApple} />
          </a>
          <a href="https://www.youtube.com/@rnbloti" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <form className="forms" onSubmit={sendEmail}>
        <div className="subsend">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="EMAIL ADDRESS"
            aria-label="Email address"
            autoComplete="email"
          />
          <button
            type="submit"
            disabled={loading}
            aria-label="Submit email"
            name="submit"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="safety">
          <input
            type="checkbox"
            id="newsletter-optin"
            required
            ref={checkboxRef} // ✅ Connect ref to checkbox
          />
          <p>
            Sign up to Loti's official newsletter to be the first to find out
            about new music, videos, gigs & competitions.
          </p>
        </div>

        <div className="submission-feedback">
          {loading && <Mirage size="120" speed="2.5" color="#4EACEE" />}
          {submitted && <p className="success-msg">Subscribed!</p>}
        </div>
      </form>
    </div>
  );
};

export default NewsletterSection;
