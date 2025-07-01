import React from "react";
import Mnms from "./cards/Mnms";
import background1 from "../assets/images for the section/lotsfr_1.webp";
import background2 from "../assets/images for the section/lotsfr_2.webp";
import background3 from "../assets/images for the section/lotsfr_3.webp";
import background4 from "../assets/images for the section/lotsfr_4.webp";

const MediaAndMentions = () => {
  return (
    <>
      <div className="manhan">
        <div className="haman">
          <h1>Media & Mentions</h1>
        </div>
        <div className="hamanposts">
          <Mnms
            bkg={background1}
            href={
              "https://ghana-plug.com/lotis-ahead-ahead-is-a-gentle-push-toward-progress-lotstar-is-coming/"
            }
            bread={"Lotstar Is Coming"}
            crumbs={
              "With “Ahead Ahead,” Loti invites you into a soft, soul-baring moment — a track that feels more like a heart-to-heart than a song. Against a backdrop of mellow beats and deep-rooted lyrics, he gives voice to every young African navigating hope and hardship. It’s the sound of resilience in slow motion — and a glimpse into the heart of Lotstar."
            }
            label={"Read more about Loti’s 'Ahead Ahead' on Ghana Plug"}
            krumbs={"about Loti’s 'Ahead Ahead' on Ghana Plug"}
          />
          <Mnms
            bkg={background2}
            href={
              "https://purpkulture.com/lotis-ahead-ahead-is-what-grace-sounds-like/"
            }
            bread={"What Grace Sounds Like"}
            crumbs={
              "Loti doesn’t perform — he invites. In Ahead Ahead, he opens a quiet space where reflection meets resilience. It’s the kind of song that doesn’t need to shout to be heard. With his debut album Lotstar on the way, Loti is showing us that calm can be powerful — and grace, unforgettable."
            }
            label={
              "Read more about 'Ahead Ahead' and what grace sounds like on Purp Kulture"
            }
            krumbs={
              "about 'Ahead Ahead' and what grace sounds like on Purp Kulture"
            }
          />
          <Mnms
            bkg={background3}
            href={
              "https://musikplug.com/loti-is-speaking-to-the-hustlers-with-ahead-ahead-and-were-here-for-it/"
            }
            bread={"For the Hustlers — Loti’s Message Hits Home"}
            crumbs={
              "Loti’s Ahead Ahead is more than a vibe — it’s motivation for anyone pushing through the noise. Honest, smooth, and effortlessly real, the track speaks to every dreamer grinding with quiet determination. As Lotstar approaches, Loti reminds us that belief doesn’t have to be loud to be powerful."
            }
            label={
              "Read more about Loti speaking to hustlers with 'Ahead Ahead' on Musik Plug"
            }
            krumbs={
              "about Loti speaking to hustlers with 'Ahead Ahead' on Musik Plug"
            }
          />
          <Mnms
            bkg={background4}
            href={
              "https://ghana-plug.com/lotis-nwabali-is-an-anthem-of-pride-and-resilience/"
            }
            bread={"Loti’s “Nwabali” — Power in the Shadows"}
            crumbs={
              "Blending soulful vocals with sharp storytelling, Loti’s Nwabali is more than a tribute — it’s a declaration. Rooted in identity and resilience, the track channels pride through pain, echoing the spirit of greatness that the name “Nwabali” carries. With clean production and purpose-driven lyrics, Loti proves he's not just making music — he's making meaning."
            }
            label={
              "Read more about Loti’s 'Nwabali', an anthem of pride and resilience on Ghana Plug"
            }
            krumbs={
              "about Loti’s 'Nwabali', an anthem of pride and resilience on Ghana Plug"
            }
          />
        </div>
      </div>
    </>
  );
};

export default MediaAndMentions;
