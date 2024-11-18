import { useState } from "react";
import { leagues } from "../../data/leagues";
import { LandingPageContent } from "./LandingPage.styled";
import { LeagueCard } from "./LeagueCard";
import { Box } from "@mui/material";
import { PreviewSelectedLeague } from "./PreviewSelectedLeague";

export const LandingContent = () => {
  const [selectedCard, setSelectedCard] = useState<string>("");

  return (
    <LandingPageContent>
      <Box sx={{ margin: "1rem 0" }}>
        {leagues.map((league) => (
          <LeagueCard
            key={league.uid}
            league={league}
            onClick={() => setSelectedCard(league.uid)}
          />
        ))}
      </Box>
      {selectedCard ? (
        <PreviewSelectedLeague
          selectedLeague={
            leagues.find((league) => league.uid === selectedCard)!
          }
        />
      ) : null}
    </LandingPageContent>
  );
};
