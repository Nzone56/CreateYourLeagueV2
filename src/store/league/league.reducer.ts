import { createReducer } from "@reduxjs/toolkit";
import type { LeaguePrev } from "../../models/League/ILeague";
import { setSelectedLeague } from "./league.actions";

interface LeagueReducer {
  selectedLeague: LeaguePrev | null;
}

const initialState: LeagueReducer = {
  selectedLeague: {
    uid: "champions",
    logo: "",
    name: "",
    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
  },
};

export const leagueReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedLeague, (state, action) => ({
    ...state,
    selectedLeague: action.payload,
  }));
});
