import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LandingPageContainer = styled(Box)({
  backgroundColor: "#181a2f",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  overflow: "hidden",
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

export const StyledLeagueCard = styled(Box)<{ background: string }>(
  ({ background }) => ({
    backgroundColor: background,
    padding: "1rem",
    margin: "1rem",
  })
);
