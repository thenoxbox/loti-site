import React from "react";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/AboutSection";
import { Link } from "react-router-dom";

export const AboutLoti = () => {
  return (
    <>
      <Navbar />
      <div className="tems">
        <AboutSection />
        <div className="blokes">
          <h2>Read more about Loti via : </h2>
          <div className="kese">
            <a
              href="https://notion.online/gorimapa-gangsta-vol-2-lotstar-by-loti/"
              aria-label="Read the full article on Notion"
              title="Read the full article on Notion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notion
              <span className="visually-hidden">
                Read the full article on Wordplay
              </span>
            </a>
            <a
              href="https://www.wordplaymagazine.com/blog-1/2025/10/1/78l4xibuv9lwwnuos6zeznkomvjafh"
              aria-label="Read the full article on Wordplay"
              title="Read the full article on Wordplay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wordplay
              <span className="visually-hidden">
                Read the full article on Wordplay
              </span>
            </a>
            <a
              href="https://www.pressparty.com/pg/newsdesk/bestnewmusic/view/491371/"
              aria-label="Read the full article on Pressparty"
              title="Read the full article on Pressparty"
              target="_blank"
              rel="noopener noreferrer"
            >
              PressParty
              <span className="visually-hidden">
                Read the full article on PressParty
              </span>
            </a>
            <a
              href="https://wespeakmedia2.com/loti-keeps-it-real-on-lotstar/"
              aria-label="Read the full article on We Speak Media"
              title="Read the full article on We Speak Media"
              target="_blank"
              rel="noopener noreferrer"
            >
              We Speak Media
              <span className="visually-hidden">
                Read the full article on We Speak Media
              </span>
            </a>
          </div>
        </div>
        <div className="loke">
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    </>
  );
};
