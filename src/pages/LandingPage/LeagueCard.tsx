import { LeaguePrev } from "../../models/interfaces/interfaces";
import { LogoCardImage, StyledLeagueCard } from "./LandingPage.styled";
import SerieA from "../../assets/SerieA-small.png";
import LaLiga from "../../assets/LaLiga-small.png";
import Ligue1 from "../../assets/Ligue1-small.png";
import Bundesliga from "../../assets/Bundesliga-small.png";
import PremierLeague from "../../assets/PremierLeague-small.png";
import UefaChampionsLeague from "../../assets/UefaChampionsLeague-small.png";

export const LeagueCard = ({
  league,
  onClick,
}: {
  league: LeaguePrev;
  onClick: () => void;
}) => {
  const { logo, name, color } = league;

  const logos: Record<string, string> = {
    PremierLeague,
    SerieA,
    LaLiga,
    Ligue1,
    Bundesliga,
    UefaChampionsLeague,
  };

  return (
    <StyledLeagueCard background={color} onClick={onClick}>
      <LogoCardImage src={logos[logo]} alt={`${name}-logo`} />
    </StyledLeagueCard>
  );
};
