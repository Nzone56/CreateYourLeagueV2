import { leagues } from "../../data/leagues";
import { LandingPageContent } from "./LandingPage.styled";
import { LeagueCard } from "./LeagueCard";
import { Box } from "@mui/material";
import { PreviewSelectedLeague } from "./PreviewSelectedLeague";
import { setSelectedLeague } from "../../reducers/league.actions";
import { useSelector } from "react-redux";
import { selectLeague } from "../../reducers/League.selector";

export const LandingContent = () => {
  const selectedLeague = useSelector(selectLeague);

  console.log(selectedLeague);

  return (
    <LandingPageContent>
      <Box sx={{ margin: "1rem 0" }}>
        {leagues.map((league) => (
          <LeagueCard
            key={league.uid}
            league={league}
            onClick={() => setSelectedLeague(league)}
          />
        ))}
      </Box>
      {selectedLeague ? (
        <PreviewSelectedLeague selectedLeague={selectedLeague} />
      ) : null}
    </LandingPageContent>
  );
};
