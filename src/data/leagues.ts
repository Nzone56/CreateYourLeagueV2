import type { LeaguePrev } from "../models/League/ILeague";
export const leagues: LeaguePrev[] = [
  {
    uid: "champions",
    images: "UefaChampionsLeague",
    name: "UEFA Champions League",
    shortName: "Champions League",
    colors: {
      primary: "#0d3aff",
      secondary: "#1b1f7a",
      tertiary: "#d1e4ff",
    },
    fontFamily: "Champions",
  },
  {
    uid: "premier",
    images: "PremierLeague",
    name: "Premier League",
    shortName: "Premier League",
    colors: {
      primary: "#37003C",
      secondary: "#ff0058",
      tertiary: "#d9c3ff",
    },
    fontFamily: "PremierLeague",
  },
  {
    uid: "laliga",
    images: "LaLiga",
    name: "La Liga",
    shortName: "La Liga",
    colors: {
      primary: "#FF4B44",
      secondary: "#0F39B8",
      tertiary: "#00001B",
    },
    fontFamily: "LaLiga",
  },
  {
    uid: "seriea",
    images: "SerieA",
    name: "Serie A",
    shortName: "Serie A",
    colors: {
      primary: "#171d8d",
      secondary: "#1fc0fc",
      tertiary: "#f0f0f0",
    },
    fontFamily: "SerieA",
  },
  {
    uid: "bundesliga",
    images: "Bundesliga",
    name: "Bundesliga",
    shortName: "Bundesliga",
    colors: {
      primary: "#CC0000",
      secondary: "#000000",
      tertiary: "#FFFFFF",
    },
    fontFamily: "Bundesliga",
  },
  {
    uid: "ligue1",
    images: "Ligue1",
    name: "Ligue 1",
    shortName: "Ligue 1",
    colors: {
      primary: "#FDEA1A",
      secondary: "#085FFF",
      tertiary: "#262624",
    },
    fontFamily: "Ligue1",
  },
];
