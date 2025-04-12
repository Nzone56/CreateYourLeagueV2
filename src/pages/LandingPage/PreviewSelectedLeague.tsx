import {
  PreviewContent,
  PreviewGradientOverlay,
  PreviewImage,
  PreviewImageWrapper,
  PreviewTitle,
  SelectLeagueButton,
  StyledPreviewLeague,
} from "./LandingPage.styled";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getSelectedLeague } from "../../store/league/league.selector";
import { useAppSelector } from "../../store/store";
import { useTranslation } from "react-i18next";

export const PreviewSelectedLeague = () => {
  const navigate = useNavigate();

  const selectedLeague = useAppSelector(getSelectedLeague);
  const handleSelectLeague = () => {
    navigate("/home");
  };

  const { t } = useTranslation();
  return (
    <StyledPreviewLeague background={selectedLeague?.colors.primary ?? "#181a2f"}>
      {selectedLeague?.images && (
        <PreviewImageWrapper>
          <PreviewImage src={`./src/assets/images/${selectedLeague?.images}/preview_bg.jpg`} />
          <PreviewGradientOverlay background={selectedLeague?.colors.primary ?? "#181a2f"} />
        </PreviewImageWrapper>
      )}
      <PreviewContent background={selectedLeague?.colors.primary ?? "#181a2f"}>
        {selectedLeague?.uid === "default" ? (
          <PreviewTitle variant="h1">{t("selectALeague").toLocaleUpperCase()}</PreviewTitle>
        ) : (
          <>
            <PreviewTitle variant="h1">{selectedLeague?.name.toLocaleUpperCase()}</PreviewTitle>
            <SelectLeagueButton
              disabled={selectedLeague?.uid !== "premier"}
              variant="outlined"
              size="large"
              onClick={handleSelectLeague}
              buttoncolor={selectedLeague?.colors.secondary || "#fff"}
              endIcon={<FontAwesomeIcon icon={faCircleRight} />}
            >
              {selectedLeague?.uid === "premier" ? t("button.choose") : t("button.comingsoon")}
            </SelectLeagueButton>
          </>
        )}
      </PreviewContent>
    </StyledPreviewLeague>
  );
};
