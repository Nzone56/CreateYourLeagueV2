import { Box, Tab, styled } from "@mui/material";

export const NavMenuContainer = styled(Box)({
  height: "70px",
  padding: "1rem 2rem",
});
export const StyledTab = styled(Tab)({
  fontSize: "1.8rem",
  color: "white",
  opacity: "0.6",
  "&:hover": {
    color: "white",
    opacity: "1",
  },
  "&.Mui-selected": {
    color: "white",
    opacity: "1",
  },
});
