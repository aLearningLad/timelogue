import { Inavlinks } from "@/types";
import { BsWrenchAdjustable } from "react-icons/bs";
import { PiWatchFill } from "react-icons/pi";
import { RiAddFill } from "react-icons/ri";

export const navlinks: Inavlinks[] = [
  {
    id: 313872,
    title: "Add watch",
    img: <RiAddFill size={30} />,
    uniqueLink: "/add-watch",
  },

  {
    id: 4217824,
    title: "Curate",
    img: <BsWrenchAdjustable size={30} />,
    uniqueLink: "/all-watches",
  },
];
