import { leagues } from "../../data/leagues";
import { LandingPageContent } from "./LandingPage.styled";
import { LeagueCard } from "./LeagueCard";

export const LandingContent = () => {
  return (
    <LandingPageContent>
      {leagues.map((league) => (
        <LeagueCard key={league.uid} league={league} />
      ))}
    </LandingPageContent>
  );
};
