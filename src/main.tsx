import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AppContainer } from "./App.styled.tsx";
import { router } from "./routes/LeagueRoutes.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppContainer>
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        />
      </AppContainer>
    </Provider>
  </StrictMode>
);
