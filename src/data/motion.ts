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
      img: "/assets/motion/commercials/bentley/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/366223461",
          type: "iframe",
          aspectRatio: "aspect-cinema",
        },
        {
          src: "/assets/motion/commercials/bentley/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/bentley/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/bentley/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/bentley/5.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Merry People",
      subtitle: "2019",
      img: "/assets/motion/commercials/merry-people/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/364672261",
          type: "iframe",
        },
        {
          src: "/assets/motion/commercials/merry-people/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/merry-people/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/merry-people/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/merry-people/5.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "WAG",
      subtitle: "More Than a WAG",
      img: "/assets/motion/commercials/wag/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/331202034",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/commercials/wag/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/wag/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/wag/4.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "AMSA",
      subtitle: "Melbourne",
      img: "/assets/motion/commercials/amsa/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/348956656",
          type: "iframe",
        },
        {
          src: "/assets/motion/commercials/amsa/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/amsa/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/amsa/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/amsa/5.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Leneeva Homes",
      subtitle: "The Monterey – TVC",
      img: "/assets/motion/commercials/leneeva/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/308638818",
          type: "iframe",
        },
        {
          src: "/assets/motion/commercials/leneeva/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/leneeva/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/leneeva/4.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Home",
      subtitle: "With Deborah Hutton",
      img: "/assets/motion/commercials/home/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/568746490",
          type: "iframe",
        },
        {
          src: "/assets/motion/commercials/home/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/home/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/home/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/home/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/home/6.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/home/7.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/home/8.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/commercials/home/9.webp",
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
      img: "/assets/motion/films/the-swimming-chair/1.webp",
      items: [
        {
          type: "popup",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/6.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/7.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/8.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/9.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/10.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-swimming-chair/11.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Hyde",
      subtitle: "Short Film",
      img: "/assets/motion/films/hyde/1.webp",
      items: [
        {
          type: "popup",
        },
        {
          src: "/assets/motion/films/hyde/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/hyde/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/hyde/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/hyde/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/hyde/6.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/hyde/7.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/hyde/8.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/hyde/9.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Dating Violet",
      subtitle: "Short Film",
      img: "/assets/motion/films/dating-violet/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/658390978",
          type: "iframe",
        },
        {
          src: "/assets/motion/films/dating-violet/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/6.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/7.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/8.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/9.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/dating-violet/10.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "The Sisterhood of \n Mika and Sophie",
      subtitle: "Short Film",
      img: "/assets/motion/films/sisterhood/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/308777134",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/films/sisterhood/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/sisterhood/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/sisterhood/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/sisterhood/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/sisterhood/6.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Funeral Films",
      subtitle: "Short Film",
      img: "/assets/motion/films/funeral-films/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/309620529",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/films/funeral-films/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/funeral-films/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/funeral-films/4.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "The Silent Key",
      subtitle: "Short Film",
      img: "/assets/motion/films/the-silent-key/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/310434277",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/films/the-silent-key/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-silent-key/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-silent-key/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/films/the-silent-key/5.webp",
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
