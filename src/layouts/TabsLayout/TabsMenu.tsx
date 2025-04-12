import { Tabs, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavMenuContainer, StyledTab } from "./NavMenu.styled.";
import { CenteredBoxBetween } from "../../components/Components.styled";

const tabKeys = ["home", "schedule", "standings", "teams", "league"];

export const TabsMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const tabIndexFromPath = tabKeys.findIndex((key) => location.pathname.startsWith(`/${key}`));

  const [selectedTab, setSelectedTab] = useState(tabIndexFromPath !== -1 ? tabIndexFromPath : 0);

  useEffect(() => {
    if (tabIndexFromPath !== -1 && tabIndexFromPath !== selectedTab) {
      setSelectedTab(tabIndexFromPath);
    }
  }, [location.pathname, tabIndexFromPath, selectedTab]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue); // 👉 fuerza la animación
    navigate(`/${tabKeys[newValue]}`);
  };

  return (
    <NavMenuContainer>
      <CenteredBoxBetween>
        <Typography variant="h4">CreateYourLeague</Typography>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="standard"
          TabIndicatorProps={{ style: { transition: "all 250ms ease" } }}
        >
          {tabKeys.map((key) => (
            <StyledTab key={key} label={t(`tab.${key}`)} />
          ))}
        </Tabs>
      </CenteredBoxBetween>
    </NavMenuContainer>
  );
};
