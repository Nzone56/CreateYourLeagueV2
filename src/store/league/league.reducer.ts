import { createReducer } from "@reduxjs/toolkit";
import type { LeaguePrev } from "../../models/League/ILeague";
import { setSelectedLeague } from "./league.actions";

interface LeagueReducer {
  selectedLeague: LeaguePrev | null;
}

const initialState: LeagueReducer = {
  selectedLeague: {
    uid: "default",
    shortName: "",
    images: "",
    name: "",
    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    fontFamily: "",
  },
};

export const leagueReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedLeague, (state, action) => ({
    ...state,
    selectedLeague: action.payload,
  }));
});
