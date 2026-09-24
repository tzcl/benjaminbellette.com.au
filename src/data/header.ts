import { motionNavigation } from "./motion";

export const pages = [
  {
    link: "/motion/",
    text: "Motion",
    children: motionNavigation,
  },
  {
    link: "/stills/",
    text: "Stills",
    children: [
      { link: "/stills/#bts", text: "Behind the scenes" },
      { link: "/stills/#photography", text: "Photography" },
    ],
  },
  { link: "/contact/", text: "Contact" },
];

export default pages;
