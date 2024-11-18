import { Button, Typography } from "@mui/material";
import { LeaguePrev } from "../../models/interfaces/interfaces";
import { StyledPreviewLeague } from "./LandingPage.styled";

export const PreviewSelectedLeague = ({
  selectedLeague,
}: {
  selectedLeague: LeaguePrev;
}) => {
  return (
    <StyledPreviewLeague background={selectedLeague.color ?? "#181a2f"}>
      <Typography sx={{ fontSize: "h3.fontSize", textAlign: "center" }}>
        {selectedLeague.name}
      </Typography>
      <Button />
    </StyledPreviewLeague>
  );
};
