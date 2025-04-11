import { leagues } from "../../data/leagues";
import { LandingPageContent, LeagueCardsContainer } from "./LandingPage.styled";
import { LeagueCard } from "./LeagueCard";
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
      <LeagueCardsContainer>
        {leagues.map((league) => (
          <LeagueCard key={league.uid} league={league} onClick={() => handleSelectLeague(league)} />
        ))}
      </LeagueCardsContainer>
      <PreviewSelectedLeague />
    </LandingPageContent>
  );
};
