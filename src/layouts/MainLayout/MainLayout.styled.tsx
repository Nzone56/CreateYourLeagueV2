import { Box, styled } from "@mui/material";

export const MainLayoutStyled = styled(Box)<{ bgimage: string }>(({ bgimage }) => ({
  width: "100vw",
  minHeight: "calc(100vh - 70px)",
  backgroundImage: `url("${bgimage}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-120px 10px",
}));
