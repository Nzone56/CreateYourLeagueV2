import { Box, Tab, Tabs } from "@mui/material";

export const TabsMenu = () => {
  return (
    <Box>
      <Tabs>
        <Tab label="League" />
        <Tab label="Table" />
        <Tab label="Schedulee" />
        <Tab label="Teams" />
        <Tab label="Info" />
      </Tabs>
    </Box>
  );
};
