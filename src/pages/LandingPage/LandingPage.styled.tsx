import { Box, Button, keyframes, Typography, styled } from "@mui/material";

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
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
  flexBasis: 0,
});

export const LeagueCardsContainer = styled(Box)({
  margin: "1rem 0",
  position: "relative",
  zIndex: "1000",
});

export const StyledLeagueCard = styled(Box)<{
  background: string;
  hoverbackground: string;
}>(({ background, hoverbackground }) => ({
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
    animation: `${fadeOutBg(hoverbackground)} 0.3s ease-in forwards`,
  },
}));

export const LogoCardImage = styled("img")({
  width: "50px",
  height: "auto",
  margin: "0 auto",
});

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
  width: "100%",
  borderRadius: "15px",
  overflow: "hidden",
  maxWidth: "1150px",
  flexGrow: 1,
  flexBasis: 0,
}));

export const PreviewImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: "60%",
  maxHeight: "calc((100vh - 126px) *0.6)",
  overflow: "hidden",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
});

export const PreviewImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "fill",
});

export const PreviewGradientOverlay = styled(Box)<{ background: string }>(({ background }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `linear-gradient(to top, ${background} 0%, rgba(0,0,0,0) 70%)`,
}));

export const PreviewContent = styled(Box)<{ background: string }>(({ background }) => ({
  backgroundColor: background,
  width: "100%",
  height: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  gap: "1rem",
}));

export const PreviewTitle = styled(Typography)({
  margin: "2rem",
});

export const SelectLeagueButton = styled(Button)<{ buttoncolor: string }>(({ buttoncolor }) => ({
  borderColor: "white",
  color: "white",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  fontSize: "1.6rem",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: buttoncolor,
    borderColor: buttoncolor,
  },
  "&:disabled": {
    color: "rgba(255,255,255,0.5)",
    borderColor: "rgba(255,255,255,0.5)",
  },
}));
