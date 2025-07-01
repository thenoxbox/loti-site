import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter as faXTwitter,
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ scrollToSection, homeRef, servicesRef, worksRef }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const handleNavClick = (ref) => {
    scrollToSection(ref); // Scroll to the section
    setIsActive(false); // Close the mobile nav
  };
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isActive]);
  return (
    <>
      <nav className="nav">
        <h2>Loti</h2>
        <div className="splat">
          <div className="spread-menu">
            <button onClick={() => scrollToSection(homeRef)}>Music</button>
            <button onClick={() => scrollToSection(servicesRef)}>About</button>
            <button onClick={() => scrollToSection(worksRef)}>
              Media & Mentions
            </button>
          </div>

          <div className="lebuttan">
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

        <div className="stacked">
          <div className="bkrenji">
            <button
              className={`hamburger ${isActive ? "is-active" : ""}`}
              onClick={toggleActive}
              aria-expanded={isActive}
              aria-label="Toggle navigation menu"
            >
              <div className="bar"></div>
            </button>
          </div>
        </div>
      </nav>

      <nav className={`mobile-nav ${isActive ? "is-active" : ""}`}>
        <div className="holster">
          <div className="angles">
            <button onClick={() => handleNavClick(homeRef)}>Music</button>
            <button onClick={() => handleNavClick(servicesRef)}>About</button>
            <button onClick={() => handleNavClick(worksRef)}>
              Media & Mentions
            </button>
          </div>
          <div className="qwik">
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
      </nav>
    </>
  );
};

export default Navbar;
