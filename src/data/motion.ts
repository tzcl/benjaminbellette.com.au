import type { Item } from "../components/dynamic/Tile.svelte";

interface Tile {
  title: string;
  subtitle: string;
  img: string;
  items: Item[];
}

interface Section {
  id: string;
  title: string;
  tiles: Tile[];
}

export const pics = [
  "/assets/motion/slider-1.webp",
  "/assets/motion/slider-2.webp",
  "/assets/motion/slider-3.webp",
];

export const mumlifeTrailer: Section = {
  id: "mumlife",
  title: "MumLife Trailer",
  tiles: [
    {
      title: "MumLife",
      subtitle: "Short Film",
      img: "/assets/motion/mumlife/2.webp",
      items: [
        {
          type: "iframe",
          src: "https://player.vimeo.com/video/707425833",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/1.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/2.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/3.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/4.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/5.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/6.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/7.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/8.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/9.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/10.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/11.webp",
        },
        {
          type: "img",
          src: "/assets/motion/mumlife/12.webp",
        },
      ],
    },
  ],
};

export const musicVideos: Section = {
  id: "music",
  title: "Music Videos",
  tiles: [
    {
      title: "Sydney Children's Choir",
      subtitle: "Deine Mami",
      img: "/assets/motion/music/choir/1.webp",
      items: [
        {
          type: "iframe",
          src: "https://player.vimeo.com/video/624045346",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/2.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/3.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/4.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/5.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/6.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/7.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/8.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/9.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/10.webp",
        },
        {
          type: "img",
          src: "/assets/motion/music/choir/11.webp",
        },
      ],
    },

    {
      title: "Twin Filament",
      subtitle: "Visual Poem",
      img: "/assets/motion/music/twin-filament/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/709304147",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/music/twin-filament/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/6.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/7.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/8.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/9.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/10.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/11.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/twin-filament/12.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Maddy Jane",
      subtitle: "Thank You and Sorry",
      img: "/assets/motion/music/maddy-jane/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/263997170",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/music/maddy-jane/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/maddy-jane/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/maddy-jane/4.webp",
          title: "Stills",
        },
      ],
    },

    {
      title: "Sahara Beck",
      subtitle: "Here We Go Again",
      img: "/assets/motion/music/sahara-beck/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/308638511",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/music/sahara-beck/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/sahara-beck/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/sahara-beck/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/sahara-beck/5.webp",
          title: "Stills",
        },
      ],
    },

    {
      title: "Samsaruh",
      subtitle: "Speaking Fire",
      img: "/assets/motion/music/samsaruh/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/308644304",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/music/samsaruh/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/samsaruh/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/samsaruh/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/samsaruh/5.webp",
          title: "Stills",
        },
      ],
    },

    {
      title: "Wolf and Willow",
      subtitle: "Falling",
      img: "/assets/motion/music/falling/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/308646260",
          type: "iframe", // this overrides default type
          aspectRatio: "aspect-cinema",
        },
        {
          src: "/assets/motion/music/falling/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/falling/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/music/falling/4.webp",
          title: "Stills",
        },
      ],
    },
  ],
};

export const commercials: Section = {
  id: "commercials",
  title: "Commercials",
  tiles: [
    {
      title: "Bentley",
      subtitle: "Continental GT",
      img: "https://i.imgur.com/Xfu5Ukc.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/366223461",
          type: "iframe",
          aspectRatio: "aspect-cinema",
        },
        {
          src: "https://i.imgur.com/4Xh70ge.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/BMAQ8EW.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/BWsxRaF.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/KY1GqZD.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Merry People",
      subtitle: "2019",
      img: "https://i.imgur.com/7sOpGLI.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/364672261",
          type: "iframe",
        },
        {
          src: "https://i.imgur.com/UPu99eK.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/dUxjSVL.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Ehq2n5L.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/NxiRMI5.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "WAG",
      subtitle: "More Than a WAG",
      img: "https://i.imgur.com/CbYh9YN.png",
      items: [
        {
          src: "https://player.vimeo.com/video/331202034",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/gRtaqVL.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Cx67Tzh.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/gJJX5h8.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "AMSA",
      subtitle: "Melbourne",
      img: "https://i.imgur.com/8Dt3ylP.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/348956656",
          type: "iframe",
        },
        {
          src: "https://i.imgur.com/5NxSYnO.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/TGPVc1T.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/eNzjSQ1.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/MXO2G7p.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Leneeva Homes",
      subtitle: "The Monterey – TVC",
      img: "https://i.imgur.com/8TLw0iB.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/308638818",
          type: "iframe",
        },
        {
          src: "https://i.imgur.com/yu5MMbc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/z5bOPj3.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/QYJOsja.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Home",
      subtitle: "With Deborah Hutton",
      img: "https://i.imgur.com/tbf3X5P.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/568746490",
          type: "iframe",
        },
        {
          src: "https://i.imgur.com/3SZNbZG.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/hP8XesE.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/uDx5e7C.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YBdPUIi.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/zwYBVFc.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/HCZdGDS.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jLVR5TM.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/0uX919s.png",
          title: "Stills",
        },
      ],
    },
  ],
};

export const films: Section = {
  id: "films",
  title: "Films",
  tiles: [
    {
      title: "The Swimming Chair",
      subtitle: "Short Film",
      img: "https://i.imgur.com/aRKPM53.jpg",
      items: [
        {
          type: "popup",
        },
        {
          src: "https://i.imgur.com/tZH72wz.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/x5TtD5u.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/t51ksBR.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/scoByeX.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/3QIMde0.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/BOkIp0T.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CUNxtuj.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/OsctiMq.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fuUJbSB.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/gB0KXOL.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Hyde",
      subtitle: "Short Film",
      img: "https://i.imgur.com/aUG1V8K.jpg",
      items: [
        {
          type: "popup",
        },
        {
          src: "https://i.imgur.com/hKvdDSc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ZrmdRso.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/t5Y7LZl.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/anFg0ZZ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jg1OQ3i.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/1Zkg3jc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AdgqCAl.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YhwCj1V.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Dating Violet",
      subtitle: "Short Film",
      img: "https://i.imgur.com/fnR38rg.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/658390978",
          type: "iframe",
        },
        {
          src: "https://i.imgur.com/47C42gy.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/DYjGP5g.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CW5oRQr.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/DheoiUB.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AIe3pxd.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fjlArIK.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/wJ5XYEx.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/K7EC5Lr.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/be2uYM2.png",
          title: "Stills",
        },
      ],
    },
    {
      title: "The Sisterhood of \n Mika and Sophie",
      subtitle: "Short Film",
      img: "https://i.imgur.com/TYF4Ofy.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/308777134",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/WttVhEe.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Tb967xN.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CWRGYNx.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/byBM2Jf.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/QvOW2fw.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Funeral Films",
      subtitle: "Short Film",
      img: "https://i.imgur.com/0I1yHBR.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/309620529",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/lDCSmQM.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/DpWjKil.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/X0nI4Mv.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "The Silent Key",
      subtitle: "Short Film",
      img: "https://i.imgur.com/tNF27i2.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/310434277",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/3kfpBYT.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Oc13q5J.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/zJ8AdcZ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fFgTERz.jpg",
          title: "Stills",
        },
      ],
    },
  ],
};

export const corporates: Section = {
  id: "corporates",
  title: "Corporates",
  tiles: [
    {
      title: "Kookai",
      subtitle: "Runway Show",
      img: "https://i.imgur.com/X3WRywn.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/366880189",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/JWKvHsu.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YZdBWOh.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/t9bD7lw.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/eFOEv3d.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Samsaruh",
      subtitle: "Live in Melbourne",
      img: "https://i.imgur.com/a2UpbRD.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/308641336",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/ifPjr2e.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AmIePR4.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/7spE9iv.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/3W1AAz6.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Numerik",
      subtitle: "Sales-Tracking App",
      img: "https://i.imgur.com/juMWp8E.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/539463525",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/RVVd9Xt.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/f1PrNHf.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/mXDS3PD.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4rnqvv8.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/PRawiel.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/aHJ1jn6.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fVsnkdx.png",
          title: "Stills",
        },
      ],
    },
    {
      title: "Aha!",
      subtitle: "Burger Cook-Off",
      img: "https://i.imgur.com/F4jSPva.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/502777886",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/FXXoOTy.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jNtrAoR.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jTXOgKu.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/xB31i5j.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/oHRjR39.jpg",
          title: "Stills",
        },
      ],
    },
    {
      title: "Planet Protector \n Packaging",
      subtitle: "Cicada",
      img: "https://i.imgur.com/yTh4jON.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/624001918",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/MMQ6ygt.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/HIJ7Co9.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/u1OsvUx.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ozYD0rW.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Wm24Cus.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/tMiPxrx.png",
          title: "Stills",
        },
      ],
    },
    {
      title: "Nicky and Tait",
      subtitle: "Wedding Day",
      img: "https://i.imgur.com/kS6m8Nj.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/264354257",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/vHEoLQS.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CydxE09.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/FMAiGuC.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/y84gazN.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/VRXrZXq.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/amo5eY9.jpg",
          title: "Stills",
        },
      ],
    },
  ],
};

export const documentaries: Section = {
  id: "documentaries",
  title: "Documentaries",
  tiles: [
    {
      title: "Sydney Children's Choir",
      subtitle: "Deine Mami – Behind the Scenes",
      img: "https://i.imgur.com/LW28BKq.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/624045285",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/gbK6dKe.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AfCIsBx.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/UkAfRCj.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/nyVziL9.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/7jNaqJj.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/8W9BxoB.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4HNTTdV.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JdZ48mH.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JWtwq5P.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fA09s22.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JqcOTtd.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/TvFPXO5.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4Tu6kQi.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4yditnd.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/UerCrmh.png",
          title: "Stills",
        },
      ],
    },
    {
      title: "Fresenius",
      subtitle: "Care Goes Both Ways",
      img: "https://i.imgur.com/vWAnOn4.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/654315362",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/CYi5mC3.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/X78AwpG.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ZQ5lv1j.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/p6UMxuo.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/iQ57yQI.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ewcJin7.png",
          title: "Stills",
        },
      ],
    },
    {
      title: "The Other ANZAC Clash",
      subtitle: "Ladbrokes",
      img: "https://i.imgur.com/i83w0jK.jpg",
      items: [
        {
          src: "https://player.vimeo.com/video/707425516",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/vIVEoAQ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/lrjXt3U.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AjesSfN.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ZiDCwdg.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/anx2D23.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/EyuCX0d.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/C3MOaRd.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/WhSH8uz.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YFGUvsE.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/rZn9hUQ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/1ewjdoI.jpg",
          title: "Stills",
        },
      ],
    },
  ],
};

export const sections: Section[] = [
  musicVideos,
  commercials,
  films,
  corporates,
  documentaries,
];

export default { pics, mumlifeTrailer, sections };
