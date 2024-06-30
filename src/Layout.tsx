import { FC } from "react";
import Navbar from "./components/Navbar";

type Props = { LayoutSlot: FC };

function Layout({ LayoutSlot }: Props) {
  return (
    <div className="text-white bg-primary-100 h-screen md:grid md:grid-cols-[5rem_auto] font-roboto">
      <Navbar />
      <LayoutSlot />
    </div>
  );
}

export default Layout;
