import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Jumbotron from "./components/Jumbotron";
import background1 from "../src/assets/jambabk.webp";
import MusicReleases from "./components/MusicReleases";
import AboutSection from "./components/AboutSection";
import NewsletterSection from "./components/NewsletterSection";
import Navbar from "./components/navbar/Navbar";
import MediaAndMentions from "./components/MediaAndMentions";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        servicesRef={servicesRef}
        worksRef={worksRef}
      />
      <Jumbotron bkg={background1} />
      <div ref={homeRef}>
        <MusicReleases />
      </div>
      <div ref={worksRef}>
        <MediaAndMentions />
      </div>
      <div ref={servicesRef}>
        <AboutSection />
      </div>
      <NewsletterSection />
      <div className="footsies">
        <a
          href="https://www.elitecollectivehq.com/"
          aria-label="The Elite Collective"
        >
          The Elite Collective
        </a>
        <a href="#" aria-label="privacy policy">
          privacy policy
        </a>
        <a href="#" aria-label="terms of use">
          terms of use
        </a>
      </div>
    </>
  );
}

export default App;

// import Jumbotron from "./components/Jumbotron";
// import background1 from "../src/assets/jambabk.webp";
// import MusicReleases from "./components/MusicReleases";
// import AboutSection from "./components/AboutSection";
// import NewsletterSection from "./components/NewsletterSection";
// import Navbar from "./components/Navbar";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Jumbotron bkg={background1} />
//       <MusicReleases />
//       <AboutSection />
//       <NewsletterSection />
//     </>
//   );
// }

// export default App;

// the above is my intial implemantation
