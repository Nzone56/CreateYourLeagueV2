import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLeague } from "../../store/league/league.selector";
import { TabsMenu } from "../../components/TabsMenu";

export const LeaguePage = () => {
  const selectedLeague = useSelector(selectLeague);

  return (
    <div>
      <Typography>{selectedLeague!.name}</Typography>
      <TabsMenu />
    </div>
  );
};
