import { createAction } from "@reduxjs/toolkit";
import { LeaguePrev } from "../models/interfaces/interfaces";

export const setSelectedLeague = createAction<LeaguePrev | null>(
  "league/setSelectedLeague"
);
