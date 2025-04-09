import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getSelectedLeague } from "../../store/league/league.selector";
import { TabsMenu } from "../../components/TabsMenu";

export const LeaguePage = () => {
  const selectedLeague = useSelector(getSelectedLeague);

  return (
    <div>
      <Typography>{selectedLeague!.name}</Typography>
      <TabsMenu />
    </div>
  );
};
