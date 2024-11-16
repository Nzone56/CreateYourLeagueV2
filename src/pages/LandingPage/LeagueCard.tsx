import { LeaguePrev } from "../../models/interfaces/interfaces";
import { StyledLeagueCard } from "./LandingPage.styled";

export const LeagueCard = ({ league }: { league: LeaguePrev }) => {
  const { logo, name, color } = league;

  return (
    <StyledLeagueCard background={color}>
      <img src={logo} />
      <span>{name}</span>
    </StyledLeagueCard>
  );
};
