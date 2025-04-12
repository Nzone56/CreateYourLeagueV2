import { Outlet } from "react-router-dom";
import { TabsMenu } from "./TabsMenu";

export const TabsLayout = () => {
  return (
    <>
      <TabsMenu />
      <Outlet />
    </>
  );
};
