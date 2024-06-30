// import SpaceOu from '@mui/icons-material/Dashboard';
import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, CoffeeOutlined, Menu, MenuOpen, Message, MessageOutlined, SpaceDashboard, SpaceDashboardOutlined } from '@mui/icons-material';

type Props = {}

type navElement = {
  name: string,
  icons: FC[],
  path: string,
}

function Navbar({}: Props) {

  const [hoveredMain, setHoveredMain] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const location = useLocation();

  const navElts: Array<navElement> = [
    {name: "Dashboard", icons: [SpaceDashboardOutlined, SpaceDashboard],  path: "/"},
    {name: "Message", icons: [MessageOutlined, Message],  path: "/promotion"}
  ]

  return (
    <div className='max-md:fixed max-md:rounded-b-full max-md:w-20 max-md:z-10 flex flex-col items-center py-10 gap-5 max-md:bg-primary-150/50 md:bg-primary-150'>
      <div onClick={() => setMenuOpen((state) => !state)} className='md:hidden cursor-pointer'>{menuOpen ? <MenuOpen/> : <Menu/>}</div>
      <div className={`${menuOpen ? "": "max-md:hidden"}`} onMouseEnter={() => setHoveredMain(true)} onMouseLeave={() => setHoveredMain(false)}>{hoveredMain ? <Coffee/> : <CoffeeOutlined/>}</div>
      <hr className={`${menuOpen ? "": "max-md:hidden"} border-t-gray-500 border border-t-1 w-1/2`}/>
      {menuOpen && navElts.map((navElt, index) => {
        const isSelected: boolean = location.pathname === navElt.path;
        const Icon = navElt.icons[+isSelected];
        return (
          <Link key={index} to={navElt.path}>
            <div className={`hover:bg-primary-300/50 w-12 h-12 rounded-xl grid place-items-center ${isSelected ? "border" : ""}`}>
              <Icon/>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Navbar