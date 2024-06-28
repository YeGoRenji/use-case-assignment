// import SpaceOu from '@mui/icons-material/Dashboard';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Message, MessageOutlined, SpaceDashboard, SpaceDashboardOutlined } from '@mui/icons-material';

type Props = {}

type navElement = {
  name: string,
  icons: FC[],
  path: string,
}

function Navbar({}: Props) {

  const location = useLocation();

  const navElts: Array<navElement> = [
    {name: "Dashboard", icons: [SpaceDashboardOutlined, SpaceDashboard],  path: "/"},
    {name: "Message", icons: [MessageOutlined, Message],  path: "/promotion"}
  ]

  return (
    <div className='flex flex-col items-center py-10 gap-5 bg-primary-200'>
      {navElts.map((navElt, index) => {
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