import { Typography } from "@mui/material";
import { LeaguePrev } from "../../models/interfaces/interfaces";
import { SelectLeagueButton, StyledPreviewLeague } from "./LandingPage.styled";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const PreviewSelectedLeague = ({
  selectedLeague,
}: {
  selectedLeague: LeaguePrev;
}) => {
  const navigate = useNavigate();

  const handleSelectLeague = () => {
    navigate("/league");
  };

  console.log(selectedLeague.uid);
  return (
    <StyledPreviewLeague
      background={selectedLeague.colors.primary ?? "#181a2f"}
    >
      <Typography sx={{ fontSize: "h3.fontSize", textAlign: "center" }}>
        {selectedLeague.name}
      </Typography>
      <SelectLeagueButton
        disabled={selectedLeague.uid !== "premier-league"}
        variant="outlined"
        size="large"
        onClick={handleSelectLeague}
        buttonColor={selectedLeague.colors.tertiary}
        endIcon={<FontAwesomeIcon icon={faAngleRight} />}
      >
        Choose
      </SelectLeagueButton>
    </StyledPreviewLeague>
  );
};
