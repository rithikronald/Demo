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
    { title: "Trending", src: MaxPicks, onClick: "/transactions" },
    { title: "Settings", src: Settings, onClick: "/settings" },
  ];
  return (
    // <aside className="w-20 sidebar" aria-label="Sidebar ">
    //   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 sidebar">
    //     <ul className="space-y-2">
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             aria-hidden="true"
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
    //           </svg>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </aside>
    <div
      className={` ${
        open ? "w-96" : "w-20"
      } bg-darkPurple h-screen p-5  pt-8 relative duration-300 sidebar`}
    >
      <div className="flex gap-x-4 items-center">
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
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
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
  );
};

export default Sidebar;
