import { leagues } from "../../data/leagues";
import { LandingPageContent } from "./LandingPage.styled";
import { LeagueCard } from "./LeagueCard";
import { Box } from "@mui/material";
import { PreviewSelectedLeague } from "./PreviewSelectedLeague";
import { setSelectedLeague } from "../../reducers/league.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectLeague } from "../../reducers/league.selector";
import { LeaguePrev } from "../../models/interfaces/interfaces";

export const LandingContent = () => {
  const dispatch = useDispatch();
  const selectedLeague = useSelector(selectLeague);

  const handleSelectLeague = (league: LeaguePrev) => {
    if (league.uid !== selectedLeague?.uid) {
      dispatch(setSelectedLeague(league));
    }
  };
  return (
    <LandingPageContent>
      <Box sx={{ margin: "1rem 0" }}>
        {leagues.map((league) => (
          <LeagueCard
            key={league.uid}
            league={league}
            onClick={() => handleSelectLeague(league)}
          />
        ))}
      </Box>
      {selectedLeague ? (
        <PreviewSelectedLeague selectedLeague={selectedLeague} />
      ) : null}
    </LandingPageContent>
  );
};
