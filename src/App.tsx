import { RouterProvider } from "react-router-dom";
import { AppContainer } from "./App.styled.tsx";
import { router } from "./routes/LeagueRoutes.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <RouterProvider future={{ v7_startTransition: true }} router={router} />
      </AppContainer>
    </Provider>
  );
};
