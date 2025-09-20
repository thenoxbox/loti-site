import React from "react";
import Mnms from "./cards/Mnms";
import background1 from "../assets/images for the section/lotsfr_5.webp";
import background2 from "../assets/images for the section/lotsfr_7.webp";
import background3 from "../assets/images for the section/lotsfr_1.webp";
import background4 from "../assets/images for the section/lotsfr_6.webp";

const MediaAndMentions = () => {
  return (
    <>
      <div className="manhan">
        <div className="haman">
          <h1>Press</h1>
        </div>
        <div className="hamanposts">
          <Mnms
            bkg={background1}
            href={"https://www.mysticsons.com/article/getting-know-loti"}
            bread={"Getting To Know... Loti"}
            crumbs={
              "Loti, born Emelie Dan-Nwabueze in Lagos, is fast becoming one of Nigeria’s most compelling new voices. With his bold storytelling and genre-blurring sound, he has already sparked viral moments like the #MainlandChallenge. His latest EP Gorimapa Gangsta, Vol. 2: Lotstar dives deep into themes of persistence, redemption, and gratitude, cementing his place as a rising star to watch."
            }
            label={"Read the full article on Mystic Sons"}
            krumbs={"Read the full article on Mystic Sons"}
          />
          <Mnms
            bkg={background2}
            href={
              "https://ventsmagazine.com/2025/09/19/vents-magazines-top-tracks-volume-24/"
            }
            bread={"Loti – Gorimapa Gangsta, Vol. 2: Lotstar"}
            crumbs={
              "Loti’s latest EP Gorimapa Gangsta, Vol. 2: Lotstar cements his reputation as one of Nigeria’s boldest storytellers. Blending resilience, ambition, and raw lyricism, the project reflects the grind of Lagos while celebrating gratitude and perseverance. With standout tracks like Okirika featuring Taves, the EP is a defining milestone in his journey."
            }
            label={"Read the full article on Vents Magazine"}
            krumbs={"Read the full article on Vents Magazine"}
          />
          <Mnms
            bkg={background3}
            href={
              "https://www.musiccrowns.org/new-music/loti-rises-higher-with-gorimapa-gangsta-vol-2-lotstar/"
            }
            bread={"Loti rises higher — ‘Lotstar’"}
            crumbs={
              "Loti’s Gorimapa Gangsta, Vol. 2: Lotstar is a fearless, personal EP that captures ambition, struggle and survival in Lagos. Building on the viral success of “Mainland” and the #MainlandChallenge, the project blends sharp lyricism with a genre-bending sound — from afrobeats to trap and alt-hip-hop — and lands as a manifesto of persistence and growth."
            }
            label={"Read the full feature on Music Crowns"}
            krumbs={"Read the full feature on Music Crowns"}
          />
          <Mnms
            bkg={background4}
            href={
              "https://www.music-news.com/news/Underground/184201/This-week-s-emerging-and-self-releasing-artists"
            }
            bread={"Loti & Taves Link Up on ‘Okirika’"}
            crumbs={
              "On his new EP Gorimapa Gangsta, Vol. 2: Lotstar, Loti blends raw storytelling with sharp lyricism, chronicling the struggles and ambition of Lagos life. The standout single Okirika featuring Taves reinforces his fearless artistry and cements him as one of Nigeria’s most compelling new voices."
            }
            label={"Read the full feature on Music News"}
            krumbs={"Read the full feature on Music News"}
          />
        </div>
      </div>
    </>
  );
};

export default MediaAndMentions;
