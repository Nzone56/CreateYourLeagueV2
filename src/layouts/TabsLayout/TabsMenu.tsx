import { Tabs, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { NavMenuContainer, StyledTab } from "./TabsLayout.styled";
import { CenteredBoxBetween } from "../../components/Components.styled";

const tabKeys = ["home", "schedule", "standings", "teams", "league"];

export const TabsMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Encuentra el tab actual basado en la ruta
  const currentTab = tabKeys.find((key) => location.pathname.startsWith(`/${key}`)) || null;

  // Manejador de cambio de tab
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <NavMenuContainer>
      <CenteredBoxBetween>
        <Typography variant="h4">CreateYourLeague</Typography>
        <Tabs value={currentTab ? `/${currentTab}` : false} onChange={handleChange}>
          {tabKeys.map((key) => (
            <StyledTab key={key} label={t(`tab.${key}`)} value={`/${key}`} />
          ))}
        </Tabs>
      </CenteredBoxBetween>
    </NavMenuContainer>
  );
};
