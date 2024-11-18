import { RootState } from "../app/store";

export const selectLeague = (state: RootState) => state.league.selectedLeague;
