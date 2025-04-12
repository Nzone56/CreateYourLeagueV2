import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LeaguePage } from "../pages/LeaguePage";
import { SchedulePage } from "../pages/SchedulePage";
import { StandingsPage } from "../pages/StandingsPage";
import { TeamsPage } from "../pages/TeamsPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/schedule",
      element: <SchedulePage />,
    },
    {
      path: "/standings",
      element: <StandingsPage />,
    },
    {
      path: "/teams",
      element: <TeamsPage />,
    },
    {
      path: "/league",
      element: <LeaguePage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
