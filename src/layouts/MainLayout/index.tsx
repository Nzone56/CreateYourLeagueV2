import { ReactNode } from "react";
import { getSelectedLeague } from "../../store/league/league.selector";
import { useAppSelector } from "../../store/store";
import { MainLayoutStyled } from "./MainLayout.styled";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const selectedLeague = useAppSelector(getSelectedLeague);

  return (
    <MainLayoutStyled bgimage={`./src/assets/images/${selectedLeague?.images}/logo_small.png`}>
      {children}
    </MainLayoutStyled>
  );
};
