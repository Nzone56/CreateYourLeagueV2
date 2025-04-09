import { createAction } from "@reduxjs/toolkit";
import type { LeaguePrev } from "../../models/League/ILeague";

export const setSelectedLeague = createAction<LeaguePrev | null>("league/setSelectedLeague");
