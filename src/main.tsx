import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AppContainer } from "./App.styled.tsx";
import { router } from "./routes/LeagueRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContainer>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={router}
      />
    </AppContainer>
  </StrictMode>
);
