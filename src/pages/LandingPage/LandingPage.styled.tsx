import styled from "@emotion/styled";
import { Box, Button, keyframes, Typography } from "@mui/material";

const fadeInBg = (color: string) => keyframes`
  0% { background-color: ${color}; }
  100% { background-color: #2b2f50; }
`;

const fadeOutBg = (color: string) => keyframes`
  0% { background-color: #2b2f50; }
  100% { background-color: ${color}; }
`;

export const LandingPageContainer = styled(Box)({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const LandingPageHeader = styled(Box)({
  backgroundColor: "#3a3f6a",
  padding: "0.25rem",
});

export const LandingPageContent = styled(Box)({
  backgroundColor: "#181a2f",
  padding: "1rem",
  display: "flex",
  flexGrow: 1,
  flexBasis: 0,
});

export const StyledLeagueCard = styled(Box)<{
  background: string;
  hoverBackground: string;
}>(({ background, hoverBackground }) => ({
  backgroundColor: background,
  color: background,
  padding: "0.5rem",
  margin: "1rem",
  width: "225px",
  height: "100px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  borderRadius: "15px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  animation: `${fadeInBg(background)} 1s ease-out forwards`,
  "&:hover": {
    transform: "scale(1.15)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    animation: `${fadeOutBg(hoverBackground)} 0.3s ease-in forwards`,
  },
}));

export const LogoCardImage = styled.img(() => ({
  width: "50px",
  height: "auto",
  margin: "0 auto",
}));

export const LogoCardTitle = styled(Typography)<{ font: string; color: string }>(({ font, color }) => ({
  textAlign: "center",
  fontFamily: font,
  overflow: "hidden",
  borderRight: "2px solid white",
  animation: "typing 1.65s steps(30, end) forwards, blink 0.65s step-end infinite",
  width: "0",
  whiteSpace: "nowrap",

  "@keyframes typing": {
    from: { width: 0 },
    to: { width: "100%" },
  },

  "@keyframes blink": {
    "0%": { borderRightColor: color },
    "50%": { borderRightColor: "transparent" },
    "100%": { borderRightColor: color },
  },
}));

export const StyledPreviewLeague = styled(Box)<{ background: string }>(({ background }) => ({
  backgroundColor: background,
  margin: "2rem 0",
  padding: "1rem",
  width: "100%",
  height: "calc (100% - 2rem)",
}));

export const SelectLeagueButton = styled(Button)<{ buttoncolor: string }>(({ buttoncolor }) => ({
  borderColor: buttoncolor,
  color: buttoncolor,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

export const PreviewTitle = styled(Typography)({
  textAlign: "center",
});

export const LeagueCardsContainer = styled(Box)({
  margin: "1rem 0",
});
