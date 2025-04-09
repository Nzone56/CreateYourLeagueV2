import { RouterProvider } from "react-router-dom";
import { AppContainer } from "./App.styled.tsx";
import { router } from "./routes/LeagueRoutes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <RouterProvider future={{ v7_startTransition: true }} router={router} />
      </AppContainer>
    </Provider>
  );
};
