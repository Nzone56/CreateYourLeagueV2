import { PreviewTitle, SelectLeagueButton, StyledPreviewLeague } from "./LandingPage.styled";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getSelectedLeague } from "../../store/league/league.selector";
import { useAppSelector } from "../../store/store";

export const PreviewSelectedLeague = () => {
  const navigate = useNavigate();

  const selectedLeague = useAppSelector(getSelectedLeague);
  const handleSelectLeague = () => {
    navigate("/league");
  };

  return (
    <StyledPreviewLeague background={selectedLeague.colors.primary ?? "#181a2f"}>
      <PreviewTitle variant="h3">{selectedLeague.name}</PreviewTitle>
      <SelectLeagueButton
        disabled={selectedLeague.uid !== "premier"}
        variant="outlined"
        size="large"
        onClick={handleSelectLeague}
        buttoncolor={selectedLeague.colors.tertiary}
        endIcon={<FontAwesomeIcon icon={faAngleRight} />}
      >
        Choose
      </SelectLeagueButton>
    </StyledPreviewLeague>
  );
};
