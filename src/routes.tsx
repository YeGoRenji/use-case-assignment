import { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import { FC } from "react";
import Dashboard from "./pages/Dashboard";
import Promotion from "./pages/Promotion";

type slotElement = {
  path: string;
  slot: FC;
};

const slotElements: slotElement[] = [
  { path: "/", slot: Dashboard },
  { path: "/promotion", slot: Promotion },
];

const routes: RouteObject[] = slotElements.map((slotElt) => ({
  path: slotElt.path,
  element: <Layout LayoutSlot={slotElt.slot} />,
}));

export default routes;
