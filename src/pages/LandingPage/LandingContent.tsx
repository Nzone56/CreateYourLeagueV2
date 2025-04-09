import { leagues } from "../../data/leagues";
import { LandingPageContent } from "./LandingPage.styled";
import { LeagueCard } from "./LeagueCard";
import { Box } from "@mui/material";
import { PreviewSelectedLeague } from "./PreviewSelectedLeague";
import { getSelectedLeague } from "../../store/league/league.selector";
import type { LeaguePrev } from "../../models/League/ILeague";
import { setSelectedLeague } from "../../store/league/league.actions";
import { useAppDispatch, useAppSelector } from "../../store/store";

export const LandingContent = () => {
  const dispatch = useAppDispatch();
  const selectedLeague = useAppSelector(getSelectedLeague);

  const handleSelectLeague = (league: LeaguePrev) => {
    if (league.uid !== selectedLeague?.uid) {
      dispatch(setSelectedLeague(league));
    }
  };

  return (
    <LandingPageContent>
      <Box sx={{ margin: "1rem 0" }}>
        {leagues.map((league) => (
          <LeagueCard key={league.uid} league={league} onClick={() => handleSelectLeague(league)} />
        ))}
      </Box>
      <PreviewSelectedLeague />
    </LandingPageContent>
  );
};
