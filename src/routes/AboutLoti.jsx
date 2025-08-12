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
        <div className="loke">
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    </>
  );
};
