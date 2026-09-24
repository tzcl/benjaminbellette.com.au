import type { Item } from "../components/dynamic/Tile.svelte";

export interface WatchLink {
  label: string;
  href: string;
  icon?: "instagram" | "tiktok";
}
export interface Tile {
  title: string;
  subtitle: string;
  img?: string;
  items: Item[];
  watchLinks?: WatchLink[];
}
export interface Section {
  id: string;
  title: string;
  tiles: Tile[];
  featuredCount?: number;
}

// Content gaps and source folders are tracked in docs/2026-content-todos.md.
// TODO: Confirm Bali's subtitle/video; the supplied YouTube URL is Lewis Garnham.
// TODO: Add Lizzy Hoo's media when supplied.
// TODO: Correct Cat Scratch Fever's video and An Afternoon Together's stills.
// TODO: Add Storm Bird's Stan/Nine watch links once supplied (expected November).

export const pics = [
  "/assets/motion/slider-1.webp",
  "/assets/motion/slider-2.webp",
  "/assets/motion/slider-3.webp",
];

const stormBird: Tile = {
  title: "Storm Bird",
  subtitle: "Feature Film",
  items: [
    {
      type: "iframe",
      src: "https://player.vimeo.com/video/1202730648",
      title: "Storm Bird — Feature Film",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/10_E4L5-eUPcoDm7HnfIDUnV941BjBgKF.webp",
      title: "Storm Bird — Still 1",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1YOfHEpoaKsmxVbyzGqkYIilTh9dCJRgk.webp",
      title: "Storm Bird — Still 2",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1XHK2KB7puFATnJE3yvqBlH4YzOYugoD7.webp",
      title: "Storm Bird — Still 3",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1MPkKqx0ZmYISQ3SNrH2Qi-d3CSXdOfFW.webp",
      title: "Storm Bird — Still 4",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/12YJE6vl2l0cQaff2S4jLqkDwJYigZa3i.webp",
      title: "Storm Bird — Still 5",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1JekbdM2nYjlxnLP-rHH8mw8sMxsk5FkR.webp",
      title: "Storm Bird — Still 6",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1ztN-g1A91nW2fg-wrDtigrI2Ug8t8EOW.webp",
      title: "Storm Bird — Still 7",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1EqOw8F6wHNbzFOQeeZ07PAg4JuY7iNPE.webp",
      title: "Storm Bird — Still 8",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/11sLe3wk9E2iYwooz5fb0lMZc1WOBmmBt.webp",
      title: "Storm Bird — Still 9",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1SkQflCUoeequH589QBmsJQeHRGEtiW67.webp",
      title: "Storm Bird — Still 10",
    },
    {
      type: "img",
      src: "/assets/motion/storm-bird/1B6uBZcZAvR2UakkicsURcvvy78BXkqRY.webp",
      title: "Storm Bird — Still 11",
    },
  ],
  img: "/assets/motion/storm-bird/1JekbdM2nYjlxnLP-rHH8mw8sMxsk5FkR.webp",
};

const mumLife: Tile = {
  title: "Mum Life",
  subtitle: "Short Film",
  img: "/assets/motion/films/mumlife/2.webp",
  items: [
    {
      type: "iframe",
      src: "https://player.vimeo.com/video/707425833",
    },
    {
      type: "img",
      src: "/assets/motion/awards/2022-gold.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/1.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/2.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/3.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/4.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/5.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/6.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/7.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/8.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/9.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/10.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/11.webp",
    },
    {
      type: "img",
      src: "/assets/motion/films/mumlife/12.webp",
    },
  ],
};

const pasifikaDrift: Tile = {
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
      src: "/assets/motion/awards/2024-merit.webp",
    },
    {
      type: "img",
      src: "/assets/motion/awards/2023-gold.webp",
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
};

export const trailers: Section[] = [
  {
    id: "storm-bird",
    title: "Storm Bird Trailer",
    tiles: [stormBird],
  },
  {
    id: "mumlife",
    title: "Mum Life Trailer",
    tiles: [mumLife],
  },
  {
    id: "pasifika",
    title: "Pasifika Drift Trailer",
    tiles: [pasifikaDrift],
  },
];

export const sections: Section[] = [
  {
    id: "feature-films",
    title: "Feature Films",
    tiles: [
      {
        title: "The Comedian",
        subtitle: "Feature Film",
        items: [
          {
            type: "img",
            src: "/assets/motion/the-comedian/1mWHv6wqquZuQIhTL2M1VLf9n_r2Kf01-.webp",
            title: "The Comedian — Still 1",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1ss1b17yd6bmZWuLVk4cJKbeihmiDmfu9.webp",
            title: "The Comedian — Still 2",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/15ESPBjILgVBsQEEYRQoTOeOIptlG0zQo.webp",
            title: "The Comedian — Still 3",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1LSXB0W0cQQbTHP_nESvEtCzBUrugspgT.webp",
            title: "The Comedian — Still 4",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1NIqx33Lz4kew0vA608SJL7Sl26jKI8rt.webp",
            title: "The Comedian — Still 5",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1cTgad40kc-dGz-sbXqvHjlOsnniOuWQb.webp",
            title: "The Comedian — Still 6",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1cI1a5H6AHZ6H_-89Z3vTcU2parSQNRNc.webp",
            title: "The Comedian — Still 7",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1dfM3gmPP7quo8vVV9SezZLqM5NKp9mhS.webp",
            title: "The Comedian — Still 8",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1AqBN3Y8LG-NQqqccBRH99nX7LxxtJXPc.webp",
            title: "The Comedian — Still 9",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1SLbgLFcE8kJEVphaJaIsXUMWuua0B7ha.webp",
            title: "The Comedian — Still 10",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1QvvcSoFIks9E0eRkL53YhP8Dr-_xN77-.webp",
            title: "The Comedian — Still 11",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1TfL4Ve7_RVaYh_rP85xUMVIgn2VtdJQJ.webp",
            title: "The Comedian — Still 12",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/1Hn-IhYNQX3oaFdUtgk17-zPaNz-PJexL.webp",
            title: "The Comedian — Still 13",
          },
          {
            type: "img",
            src: "/assets/motion/the-comedian/11AtPrBZ8fe7VGDhwqS0EpPQplfUJqazX.webp",
            title: "The Comedian — Still 14",
          },
        ],
        img: "/assets/motion/the-comedian/1SLbgLFcE8kJEVphaJaIsXUMWuua0B7ha.webp",
      },
      stormBird,
      {
        title: "Meerestille",
        subtitle: "Feature Film",
        items: [],
      },
    ],
  },
  {
    id: "films",
    title: "Short Films",
    tiles: [
      {
        title: "Tempt",
        subtitle: "Short Film",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1228362561?h=3271a110e6",
            title: "Tempt — Short Film",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/1DtuH2T67v5yp4JjG1LD8Ystm7_YvxVdF.webp",
            title: "Tempt — Still 1",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/1DJcra7xiGzGub3qG_6XqO5xPs7NwLNRZ.webp",
            title: "Tempt — Still 2",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/1qeWXl4ymLCAo41ZNUwi0_gmvulPeFqp_.webp",
            title: "Tempt — Still 3",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/18zqIbT1YtuZ3liPgkBWA6_a2r4ab75cP.webp",
            title: "Tempt — Still 4",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/1Is3gz7SWrDhzoTNa5q8mBWAMcK716ClL.webp",
            title: "Tempt — Still 5",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/1QsixwcMbzTZnRYyw5DMBuCNlJU3HXNt8.webp",
            title: "Tempt — Still 6",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/1HkywB7ihLMaF-p-51Z3Zr6SHmo0gkqgD.webp",
            title: "Tempt — Still 7",
          },
          {
            type: "img",
            src: "/assets/motion/tempt/1cdu_GELdT1AMW6G8Wlhxw5E3wVLxRNmt.webp",
            title: "Tempt — Still 8",
          },
        ],
        img: "/assets/motion/tempt/1DtuH2T67v5yp4JjG1LD8Ystm7_YvxVdF.webp",
      },
      {
        title: "Cat Scratch Fever",
        subtitle: "Short Film",
        items: [],
      },
      {
        title: "Violet & Sparkles",
        subtitle: "Short Film",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1227759743?h=c2eba2873a",
            title: "Violet & Sparkles — Short Film",
          },
          {
            type: "img",
            src: "/assets/motion/violet-and-sparkles/1WImJdvDxumFxZu1lq0JCK0daiUmfNWF9.webp",
            title: "Violet & Sparkles — Still 1",
          },
          {
            type: "img",
            src: "/assets/motion/violet-and-sparkles/19bBNvhl3kqrUlEK6NiN3vv75Ra54xlnB.webp",
            title: "Violet & Sparkles — Still 2",
          },
          {
            type: "img",
            src: "/assets/motion/violet-and-sparkles/1cFKsLv_zeNTr52aVCZjCpJtPZtZWTFex.webp",
            title: "Violet & Sparkles — Still 3",
          },
          {
            type: "img",
            src: "/assets/motion/violet-and-sparkles/16jTlsHgTWgs-EnvgG7STKtHivUW-N8Hg.webp",
            title: "Violet & Sparkles — Still 4",
          },
        ],
        img: "/assets/motion/violet-and-sparkles/1WImJdvDxumFxZu1lq0JCK0daiUmfNWF9.webp",
      },
      mumLife,
      pasifikaDrift,
      {
        title: "An Afternoon Together",
        subtitle: "Short Film",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1228363452?h=ceb072456c",
            title: "An Afternoon Together — Short Film",
          },
        ],
        img: "/assets/motion/an-afternoon-together/cover.webp",
      },
    ],
  },
  {
    id: "web-series",
    title: "Web Series",
    tiles: [
      {
        title: "You Can Smoke Anything",
        subtitle: "Web Series",
        items: [
          {
            type: "img",
            src: "/assets/motion/ycsa/1-ONalNDoLSY1w2QGB60a0So3K1hi5IWn.webp",
            title: "You Can Smoke Anything — Still 1",
          },
          {
            type: "img",
            src: "/assets/motion/ycsa/1oSjG9MsyoW6ikoBbW8s8ltPBhwQkADAm.webp",
            title: "You Can Smoke Anything — Still 2",
          },
          {
            type: "img",
            src: "/assets/motion/ycsa/1Oa31N_iYCmFSThMaPUzcxeO4dk78SxX_.webp",
            title: "You Can Smoke Anything — Still 3",
          },
          {
            type: "img",
            src: "/assets/motion/ycsa/11AgMRRqiB8uTtUyvKsQPal6sxIwVKhhr.webp",
            title: "You Can Smoke Anything — Still 4",
          },
          {
            type: "img",
            src: "/assets/motion/ycsa/1kcWzaq7hRj30H_RWFKn_b7l2LhPBKure.webp",
            title: "You Can Smoke Anything — Still 5",
          },
          {
            type: "img",
            src: "/assets/motion/ycsa/1Xi0sJasjrex4tbS7DqLRC3aNXA0mmJyy.webp",
            title: "You Can Smoke Anything — Still 6",
          },
          {
            type: "img",
            src: "/assets/motion/ycsa/1zeaELUANnLX82pcD30ZKsBhiorkndtke.webp",
            title: "You Can Smoke Anything — Still 7",
          },
          {
            type: "img",
            src: "/assets/motion/ycsa/1dWlR7LgjZ6fmU4Dw5KlTj0m3EpxvjKlO.webp",
            title: "You Can Smoke Anything — Still 8",
          },
        ],
        img: "/assets/motion/ycsa/1dWlR7LgjZ6fmU4Dw5KlTj0m3EpxvjKlO.webp",
      },
      {
        title: "The Last Custodians",
        subtitle: "Short Film",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1188271931?h=eca826dda2",
            title: "The Last Custodians — Short Film",
          },
          {
            type: "img",
            src: "/assets/motion/the-last-custodians/1YCIKpWe6kS_qH7pKTfiEHVmAcg5VK-tA.webp",
            title: "The Last Custodians — Still 1",
          },
          {
            type: "img",
            src: "/assets/motion/the-last-custodians/191LxFY2SpVDydnFzNCF5UKZWUksAq0M8.webp",
            title: "The Last Custodians — Still 2",
          },
          {
            type: "img",
            src: "/assets/motion/the-last-custodians/1QZDyGRQdiLYB238XZYRLV1vNuSbgf7p8.webp",
            title: "The Last Custodians — Still 3",
          },
          {
            type: "img",
            src: "/assets/motion/the-last-custodians/1lb0PliE25Qfh0UkHQphjUq2C9PJ0WEPZ.webp",
            title: "The Last Custodians — Still 4",
          },
          {
            type: "img",
            src: "/assets/motion/the-last-custodians/1Youc3zKMnCcNhYRAR7-AWnGQIqfmvwGU.webp",
            title: "The Last Custodians — Still 5",
          },
          {
            type: "img",
            src: "/assets/motion/the-last-custodians/1uD5YuDlxdhdj_WbWX9bMyInjPGd1DUuu.webp",
            title: "The Last Custodians — Still 6",
          },
        ],
        img: "/assets/motion/the-last-custodians/1YCIKpWe6kS_qH7pKTfiEHVmAcg5VK-tA.webp",
      },
      {
        title: "NEXT",
        subtitle: "Vertical Series",
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
        watchLinks: [
          {
            label: "Watch NEXT on Instagram",
            href: "https://www.instagram.com/nexttheseries",
            icon: "instagram",
          },
          {
            label: "Watch NEXT on TikTok",
            href: "https://www.tiktok.com/@nexttheseries",
            icon: "tiktok",
          },
        ],
      },
    ],
  },
  {
    id: "music",
    title: "Music Videos",
    tiles: [
      {
        title: "Fatai",
        subtitle: "Shuga Luga Buga",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1186053973",
            title: "Fatai — Shuga Luga Buga",
          },
        ],
        img: "/assets/motion/fatai/cover.webp",
      },
      {
        title: "Kino Mortar",
        subtitle: "Boogie Man",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1186054204",
            title: "Kino Mortar — Boogie Man",
          },
        ],
        img: "/assets/motion/kino-mortar/cover.webp",
      },
      {
        title: "Caddy Calaghan",
        subtitle: "Solo Roam",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1225843584?h=1573fe26a5",
            title: "Caddy Calaghan — Solo Roam",
          },
        ],
        img: "/assets/motion/caddy-calaghan/cover.webp",
      },
      {
        title: "Sahara Beck",
        subtitle: "Here We Go Again",
        img: "/assets/motion/music/sahara-beck/1.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/308638511",
            type: "iframe",
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
            type: "iframe",
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
        title: "Forner",
        subtitle: "Power!",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1025687695",
            title: "Forner — Power!",
          },
        ],
        img: "/assets/motion/forner/cover.webp",
      },
    ],
  },
  {
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
        title: "Flickerfest",
        subtitle: "Muriel's Wedding",
        img: "/assets/motion/commercials/flickerfest/1.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/980309461",
            type: "iframe",
            aspectRatio: "aspect-cinema",
          },
          {
            src: "/assets/motion/commercials/flickerfest/2.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/flickerfest/3.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/flickerfest/4.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/flickerfest/5.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/flickerfest/6.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/flickerfest/7.webp",
            title: "Stills",
          },
        ],
      },
      {
        title: "Melbourne Theatre Company",
        subtitle: "2024 Campaign",
        img: "/assets/motion/commercials/melbourne-theatre-company/1.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/980298444",
            type: "iframe",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/2.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/3.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/4.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/5.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/6.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/7.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/8.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/9.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/10.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/11.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/12.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/13.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/14.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/15.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/commercials/melbourne-theatre-company/16.webp",
            title: "Stills",
          },
        ],
      },
      {
        title: "Merry People",
        subtitle: "Winter Campaign",
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
        title: "Mirvac",
        subtitle: "Smiths Lane",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1227759818",
            title: "Mirvac — Smiths Lane",
          },
        ],
        img: "/assets/motion/mirvac/cover.webp",
      },
      {
        title: "Carolina Herrera",
        subtitle: "Maria Thattil",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1227757604",
            title: "Carolina Herrera — Maria Thattil",
          },
        ],
        img: "/assets/motion/carolina-herrera/cover.webp",
      },
    ],
  },
  {
    id: "corporates",
    title: "Corporates",
    tiles: [
      {
        title: "Scrum Poetry",
        subtitle: "The Gruen Transfer",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1227758218",
            title: "Scrum Poetry — The Gruen Transfer",
          },
        ],
        img: "/assets/motion/scrum-poetry/cover.webp",
      },
      {
        title: "Riverworks",
        subtitle: "Victoria Gardens",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1227759559",
            title: "Riverworks — Victoria Gardens",
          },
        ],
        img: "/assets/motion/riverworks/cover.webp",
      },
      {
        title: "Olivine",
        subtitle: "Cricket Victoria and Renegades",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1227759557",
            title: "Olivine — Cricket Victoria and Renegades",
          },
        ],
        img: "/assets/motion/olivine/cover.webp",
      },
      {
        title: "The Big Design Market",
        subtitle: "Hype Reel",
        img: "/assets/motion/corporates/design-market/0.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/834302748",
            type: "iframe",
          },
          {
            src: "/assets/motion/corporates/design-market/1.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/design-market/2.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/design-market/3.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/design-market/4.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/design-market/5.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/design-market/6.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/design-market/7.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/design-market/8.webp",
            title: "Stills",
          },
        ],
      },
      {
        title: "Kookai",
        subtitle: "Runway Show",
        img: "/assets/motion/corporates/kookai/1.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/366880189",
            type: "iframe",
          },
          {
            src: "/assets/motion/corporates/kookai/2.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/kookai/3.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/kookai/4.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/kookai/5.webp",
            title: "Stills",
          },
        ],
      },
      {
        title: "Numerik",
        subtitle: "Sales-Tracking App",
        img: "/assets/motion/corporates/numerik/1.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/539463525",
            type: "iframe",
          },
          {
            src: "/assets/motion/corporates/numerik/2.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/numerik/3.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/numerik/4.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/numerik/5.webp",
            title: "Stills",
          },
          {
            src: "/assets/motion/corporates/numerik/6.webp",
            title: "Stills",
          },
        ],
      },
    ],
  },
  {
    id: "documentaries",
    title: "Documentaries",
    tiles: [
      {
        title: "Saigon",
        subtitle: "The Wild Life",
        items: [
          {
            type: "iframe",
            src: "https://player.vimeo.com/video/1204057353",
            title: "Saigon — The Wild Life",
          },
        ],
        img: "/assets/motion/saigon/cover.webp",
      },
      {
        title: "Bali",
        subtitle: "",
        items: [],
      },
      {
        title: "Sydney Children's Choir",
        subtitle: "Deine Mami – Behind the Scenes",
        img: "/assets/motion/docos/choir/LW28BKq.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/624045285",
            type: "iframe",
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
        title: "The Other ANZAC Clash",
        subtitle: "Ladbrokes",
        img: "/assets/motion/docos/anzac/i83w0jK.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/707425516",
            type: "iframe",
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
      {
        title: "Fresenius",
        subtitle: "Care Goes Both Ways",
        img: "/assets/motion/docos/fresenius/vWAnOn4.webp",
        items: [
          {
            src: "https://player.vimeo.com/video/654315362",
            type: "iframe",
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
    ],
    featuredCount: 2,
  },
  {
    id: "broadcasts",
    title: "Broadcasts",
    tiles: [
      {
        title: "Lizzy Hoo",
        subtitle: "",
        items: [],
      },
      {
        title: "Lewis Garnham",
        subtitle: "Comedy Special",
        items: [
          {
            type: "iframe",
            src: "https://www.youtube-nocookie.com/embed/MyfeL-hr6Hc",
            title: "Lewis Garnham — Comedy Special",
          },
        ],
        img: "/assets/motion/lewis-garnham/cover.webp",
      },
      {
        title: "Nath Valvo",
        subtitle: "Comedy Special",
        items: [],
        watchLinks: [
          {
            label: "Watch on ABC iview",
            href: "https://iview.abc.net.au/show/nath-valvo-anyway-back-to-me",
          },
        ],
      },
      {
        title: "Australian Open",
        subtitle: "Live Sports Director",
        items: [],
        watchLinks: [
          {
            label: "Watch on Australian Open",
            href: "https://ausopen.com/video-player#!?origin=L2FvdmlkZW9z&playlistId=1783060483576533796&videoId=6388081378112",
          },
        ],
      },
      {
        title: "Hockey One",
        subtitle: "Live Sports Director",
        items: [],
        watchLinks: [
          {
            label: "Watch on 7plus",
            href: "https://7plus.com.au/hockey-one?episode-id=HOON25-051&autoplay=true",
          },
        ],
      },
      {
        title: "WNBL",
        subtitle: "Live Sports Director",
        items: [],
        watchLinks: [
          {
            label: "Watch on 9Now",
            href: "https://www.9now.com.au/womens-national-basketball-league-wnbl/season-202526/clip-cmlnfkur7001i0hn5boxxzhy6",
          },
        ],
      },
    ],
  },
];

export const motionNavigation = [
  { link: "/motion/#reel", text: "Reel" },
  ...[...trailers, ...sections].map(({ id, title }) => ({
    link: "/motion/#" + id,
    text: title,
  })),
];

export default { pics, trailers, sections };
