import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const LandingPageContainer = styled(Box)({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const LandingPageHeader = styled(Box)({
  backgroundColor: "red",
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
}>(({ background }) => ({
  backgroundColor: background,
  padding: "0.5rem",
  margin: "1rem",
  width: "200px",
  height: "100px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.15)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

export const LogoCardImage = styled.img(() => ({
  width: "50px",
  height: "auto",
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
