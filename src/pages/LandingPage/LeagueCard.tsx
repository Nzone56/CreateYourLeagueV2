import type { LeaguePrev } from "../../models/League/ILeague";
import { LogoCardImage, LogoCardTitle, StyledLeagueCard } from "./LandingPage.styled";
import { useState } from "react";

export const LeagueCard = ({ league, onClick }: { league: LeaguePrev; onClick: () => void }) => {
  const { shortName, name, colors, images /*fontFamily*/ } = league;

  const [hoveredCard, setHoveredCard] = useState<boolean>(false);

  console.log(images);
  return (
    <StyledLeagueCard
      background={colors.primary}
      hoverbackground={colors.secondary}
      onClick={onClick}
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
    >
      <LogoCardImage src={`./src/assets/images/${images}/logo_small.png`} alt={`${name}-logo`} />
      {hoveredCard && (
        <LogoCardTitle /* font={fontFamily} */ font={"Default"} color={colors.primary} variant="h5">
          {shortName.toLocaleUpperCase()}
        </LogoCardTitle>
      )}
    </StyledLeagueCard>
  );
};
