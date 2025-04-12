import type { LeaguePrev } from "../../models/League/ILeague";
import { LogoCardImage, LogoCardTitle, StyledLeagueCard } from "./LandingPage.styled";
import SerieA from "../../assets/SerieA-small.png";
import LaLiga from "../../assets/LaLiga-small.png";
import Ligue1 from "../../assets/Ligue1-small.png";
import Bundesliga from "../../assets/Bundesliga-small.png";
import PremierLeague from "../../assets/PremierLeague-small.png";
import UefaChampionsLeague from "../../assets/UefaChampionsLeague-small.png";
import { useState } from "react";

export const LeagueCard = ({ league, onClick }: { league: LeaguePrev; onClick: () => void }) => {
  const { shortName, name, colors, images /*fontFamily*/ } = league;

  const [hoveredCard, setHoveredCard] = useState<boolean>(false);
  const logos: Record<string, string> = {
    PremierLeague,
    SerieA,
    LaLiga,
    Ligue1,
    Bundesliga,
    UefaChampionsLeague,
  };

  return (
    <StyledLeagueCard
      background={colors.primary}
      hoverbackground={colors.secondary}
      onClick={onClick}
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
    >
      <LogoCardImage src={logos[images]} alt={`${name}-logo`} />
      {hoveredCard && (
        <LogoCardTitle /* font={fontFamily} */ font={"Default"} color={colors.primary} variant="h5">
          {shortName.toLocaleUpperCase()}
        </LogoCardTitle>
      )}
    </StyledLeagueCard>
  );
};
