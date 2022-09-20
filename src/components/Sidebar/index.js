import "./style.css";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import Briefcase from "../../assets/briefcase.png";
import Dashboard from "../../assets/dashboard.png";
import Indexes from "../../assets/indexes.png";
import MaxPicks from "../../assets/max picks.png";
import Settings from "../../assets/settings.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const Menus = [
    { title: "Dashboard", src: Dashboard, onClick: "/dashboard" },
    { title: "Indexes", src: Indexes, onClick: "/indexes" },
    { title: "My Wallet", src: Briefcase, onClick: "/walletOverview" },
    { title: "Trending", src: MaxPicks, onClick: "/coinList" },
    { title: "Settings", src: Settings, onClick: "/settings" },
  ];
  return (
    <div className="bg-bgl1" >
    <div
      className={` ${
        open ? "w-96" : "w-[58px]"
      } background h-screen p-1  pt-8 relative duration-300 sidebar`}
    >
      <div className="flex gap-x-4 items-center translate-x-1">
        <img
          src={Logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          onClick={() => setOpen(!open)}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Maximum Protocol
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <button
            onClick={() => navigate(Menu.onClick)}
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer ${!open ? "mx-auto" : ""} hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
          >
            <img src={Menu.src} className="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </button>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
