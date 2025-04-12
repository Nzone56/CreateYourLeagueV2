import { createTheme, Theme } from "@mui/material";
import { baseOptions } from "./baseTheme";
import { LeagueName } from "../models/League/ILeague";

export const leagueThemes: Record<LeagueName, Theme> = {
  champions: createTheme({
    ...baseOptions,
    palette: {
      primary: { main: "#1b1443" },
      secondary: { main: "#ffffff" },
      info: { main: "#00a3ff" },
      background: { default: "#eaeaf1" },
      text: {
        primary: "#1b1b1b",
        secondary: "#d5d5d5",
      },
    },
    typography: {
      ...baseOptions.typography,
      fontFamily: "Markazi",
      // fontFamily: "Champions",
    },
  }),
  premier: createTheme({
    ...baseOptions,
    palette: {
      primary: { main: "#37003c" },
      secondary: { main: "#ffb81c" },
      info: { main: "#ffffff" },
      background: { default: "#f4f4f4" },
      text: {
        primary: "#1a1a1a",
        secondary: "#e0e0e0",
      },
    },
    typography: {
      ...baseOptions.typography,
      fontFamily: "Markazi",
      // fontFamily: "PremierLeague",
    },
  }),

  laliga: createTheme({
    ...baseOptions,
    palette: {
      primary: { main: "#cf0a2c" },
      secondary: { main: "#002f6c" },
      info: { main: "#f9c700" },
      background: { default: "#fafafa" },
      text: {
        primary: "#202020",
        secondary: "#f0f0f0",
      },
    },
    typography: {
      ...baseOptions.typography,
      fontFamily: "Markazi",
      // fontFamily: "LaLiga",
    },
  }),

  seriea: createTheme({
    ...baseOptions,
    palette: {
      primary: { main: "#008fd5" },
      secondary: { main: "#0b132b" },
      info: { main: "#00d9ff" },
      background: { default: "#f5f5f5" },
      text: {
        primary: "#1c1c1c",
        secondary: "#f2f2f2",
      },
    },
    typography: {
      ...baseOptions.typography,
      fontFamily: "Markazi",
      // fontFamily: "SerieA",
    },
  }),

  bundesliga: createTheme({
    ...baseOptions,
    palette: {
      primary: { main: "#d2001a" },
      secondary: { main: "#000000" },
      info: { main: "#ffffff" },
      background: { default: "#ffffff" },
      text: {
        primary: "#121212",
        secondary: "#e5e5e5",
      },
    },
    typography: {
      ...baseOptions.typography,
      fontFamily: "Markazi",
      // fontFamily: "Bundesliga",
    },
  }),

  ligue1: createTheme({
    ...baseOptions,
    palette: {
      primary: { main: "#00285e" },
      secondary: { main: "#dcd427" },
      info: { main: "#00b8f4" },
      background: { default: "#f0f0f0" },
      text: {
        primary: "#1a1a1a",
        secondary: "#eeeeee",
      },
    },
    typography: {
      ...baseOptions.typography,
      fontFamily: "Markazi",
      // fontFamily: "Ligue1",
    },
  }),

  default: createTheme({
    ...baseOptions,
    palette: {
      primary: { main: "#00285e" },
      secondary: { main: "#dcd427" },
      info: { main: "#00b8f4" },
      background: { default: "#f0f0f0" },
      text: {
        primary: "#1a1a1a",
        secondary: "#eeeeee",
      },
    },
    typography: {
      ...baseOptions.typography,
      fontFamily: "Markazi",
    },
  }),
};
