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

export const pasifikaDrift: Section = {
  id: "pasifika",
  title: "Pasifika Drift Trailer",
  tiles: [
    {
      title: "Pasifika Drift",
      subtitle: "Short Film",
      img: "/assets/motion/pasifika/cover.webp",
      items: [
        {
          type: "iframe",
          src: "https://player.vimeo.com/video/861482690",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/1.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/2.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/3.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/4.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/5.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/6.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/7.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/8.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/9.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/10.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/11.webp",
        },
        {
          type: "img",
          src: "/assets/motion/pasifika/12.webp",
        },
      ],
    },
  ],
};

export const peterAndPollock: Section = {
  id: "peter-and-pollock",
  title: "Hot Bread – Peter and Pollock Trailer",
  tiles: [
    {
      title: "Peter and Pollock",
      subtitle: "Instagram/Tiktok series",
      img: "/assets/motion/peter-and-pollock/cover.webp",
      items: [
        {
          type: "iframe",
          src: "https://player.vimeo.com/video/861496468",
          aspectRatio: "portrait:aspect-[9/16] landscape:aspect-video",
        },
        {
          type: "img",
          src: "/assets/motion/peter-and-pollock/1.webp",
        },
        {
          type: "img",
          src: "/assets/motion/peter-and-pollock/2.webp",
        },
        {
          type: "img",
          src: "/assets/motion/peter-and-pollock/3.webp",
        },
        {
          type: "img",
          src: "/assets/motion/peter-and-pollock/4.webp",
        },
        {
          type: "img",
          src: "/assets/motion/peter-and-pollock/5.webp",
        },
      ],
    },
  ],
};

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

export const nextTrailer: Section = {
  id: "next",
  title: "Next Trailer",
  tiles: [
    {
      title: "Next",
      subtitle: "Instagram/Tiktok series",
      img: "/assets/motion/next/cover.webp",
      items: [
        {
          type: "iframe",
          src: "https://player.vimeo.com/video/822597202",
          aspectRatio: "portrait:aspect-[9/16] landscape:aspect-video",
        },
        {
          type: "img",
          src: "/assets/motion/next/1.webp",
        },
        {
          type: "img",
          src: "/assets/motion/next/2.webp",
        },
        {
          type: "img",
          src: "/assets/motion/next/3.webp",
        },
        {
          type: "img",
          src: "/assets/motion/next/4.webp",
        },
        {
          type: "img",
          src: "/assets/motion/next/5.webp",
        },
        {
          type: "img",
          src: "/assets/motion/next/6.webp",
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
          src: "https://player.vimeo.com/video/497906055",
          type: "iframe",
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
          src: "https://player.vimeo.com/video/499929996",
          type: "iframe",
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
          src: "https://player.vimeo.com/video/627056728",
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
  title: "corporates",
  tiles: [
    {
      title: "Kookai",
      subtitle: "Runway Show",
      img: "/assets/motion/events/kookai/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/366880189",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/events/kookai/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/kookai/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/kookai/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/kookai/5.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Samsaruh",
      subtitle: "Live in Melbourne",
      img: "/assets/motion/events/samsaruh/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/308641336",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/events/samsaruh/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/samsaruh/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/samsaruh/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/samsaruh/5.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Numerik",
      subtitle: "Sales-Tracking App",
      img: "/assets/motion/events/numerik/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/539463525",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/events/numerik/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/numerik/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/numerik/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/numerik/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/numerik/6.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Aha!",
      subtitle: "Burger Cook-Off",
      img: "/assets/motion/events/aha/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/502777886",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/events/aha/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/aha/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/aha/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/aha/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/aha/6.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Planet Protector \n Packaging",
      subtitle: "Cicada",
      img: "/assets/motion/events/cicada/1.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/624001918",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/events/cicada/2.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/cicada/3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/cicada/4.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/cicada/5.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/cicada/6.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/cicada/7.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Nicky and Tait",
      subtitle: "Wedding Day",
      img: "/assets/motion/events/wedding/kS6m8Nj.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/264354257",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/events/wedding/vHEoLQS.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/wedding/CydxE09.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/wedding/FMAiGuC.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/wedding/y84gazN.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/wedding/VRXrZXq.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/events/wedding/amo5eY9.webp",
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
      img: "/assets/motion/docos/choir/LW28BKq.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/624045285",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/docos/choir/gbK6dKe.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/AfCIsBx.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/UkAfRCj.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/nyVziL9.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/7jNaqJj.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/4HNTTdV.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/JWtwq5P.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/JqcOTtd.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/choir/UerCrmh.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "Fresenius",
      subtitle: "Care Goes Both Ways",
      img: "/assets/motion/docos/fresenius/vWAnOn4.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/654315362",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/docos/fresenius/CYi5mC3.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/fresenius/X78AwpG.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/fresenius/ZQ5lv1j.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/fresenius/p6UMxuo.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/fresenius/iQ57yQI.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/fresenius/ewcJin7.webp",
          title: "Stills",
        },
      ],
    },
    {
      title: "The Other ANZAC Clash",
      subtitle: "Ladbrokes",
      img: "/assets/motion/docos/anzac/i83w0jK.webp",
      items: [
        {
          src: "https://player.vimeo.com/video/707425516",
          type: "iframe", // this overrides default type
        },
        {
          src: "/assets/motion/docos/anzac/vIVEoAQ.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/lrjXt3U.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/AjesSfN.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/ZiDCwdg.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/anx2D23.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/EyuCX0d.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/C3MOaRd.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/WhSH8uz.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/YFGUvsE.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/rZn9hUQ.webp",
          title: "Stills",
        },
        {
          src: "/assets/motion/docos/anzac/1ewjdoI.webp",
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

export default { pics, pasifikaDrift, peterAndPollock, mumlifeTrailer, nextTrailer, sections };
