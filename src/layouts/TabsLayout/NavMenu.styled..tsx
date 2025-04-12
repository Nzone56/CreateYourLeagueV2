import styled from "@emotion/styled";
import { Box, Tab } from "@mui/material";

export const NavMenuContainer = styled(Box)({
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
