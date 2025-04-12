import { Box, styled } from "@mui/material";

export const ColumnJustifyFlex = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const ColumnAlignFlex = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CenteredBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const FullCenterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CenteredBoxBetween = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const StartBoxBetween = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});
