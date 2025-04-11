import { PreviewTitle, SelectLeagueButton, StyledPreviewLeague } from "./LandingPage.styled";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getSelectedLeague } from "../../store/league/league.selector";
import { useAppSelector } from "../../store/store";
import { useTranslation } from "react-i18next";

export const PreviewSelectedLeague = () => {
  const navigate = useNavigate();

  const selectedLeague = useAppSelector(getSelectedLeague);
  const handleSelectLeague = () => {
    navigate("/league");
  };

  const { t } = useTranslation();
  return (
    <StyledPreviewLeague background={selectedLeague?.colors.primary ?? "#181a2f"}>
      <PreviewTitle variant="h3">{selectedLeague?.name.toLocaleUpperCase()}</PreviewTitle>
      <SelectLeagueButton
        disabled={selectedLeague?.uid !== "premier"}
        variant="outlined"
        size="large"
        onClick={handleSelectLeague}
        buttoncolor={selectedLeague?.colors.tertiary || "#fff"}
        endIcon={<FontAwesomeIcon icon={faAngleRight} />}
      >
        {t("button", "choose")}
      </SelectLeagueButton>
    </StyledPreviewLeague>
  );
};
