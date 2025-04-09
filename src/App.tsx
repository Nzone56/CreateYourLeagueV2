import { RouterProvider } from "react-router-dom";
import { AppContainer } from "./App.styled.tsx";
import { router } from "./routes/LeagueRoutes.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getSelectedLeague } from "./store/league/league.selector.ts";
import { useAppSelector } from "./store/store.ts";
import { leagueThemes } from "./theme/index.ts";
import { LeagueName } from "./models/League/ILeague.ts";

export const App = () => {
  const selectedLeague = useAppSelector(getSelectedLeague);

  const uid = selectedLeague?.uid as LeagueName;
  const currentTheme = leagueThemes[uid] ?? leagueThemes.premier;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer>
        <RouterProvider future={{ v7_startTransition: true }} router={router} />
      </AppContainer>
      <CssBaseline />
    </ThemeProvider>
  );
};
