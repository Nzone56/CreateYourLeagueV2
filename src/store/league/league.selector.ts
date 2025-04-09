import { RootState } from "../store";

export const getSelectedLeague = (state: RootState) => state.league.selectedLeague;
