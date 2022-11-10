import "./style.css";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import Briefcase from "../../assets/briefcase.png";
import Dashboard from "../../assets/dashboard.png";
import Indexes from "../../assets/indexes.png";
import MaxPicks from "../../assets/max picks.png";
import Settings from "../../assets/settings.png";
import { useNavigate, useLocation } from "react-router-dom";
import { TabItem } from "flowbite-react/lib/esm/components/Tab/TabItem";

const noSidebar = ["/", "/login", "/otpVerification"];

const Sidebar = () => {
  const open = false;
  const navigate = useNavigate();
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", src: Dashboard, onClick: "/dashboard" },
    { title: "Indexes", src: Indexes, onClick: "/indexes" },
    { title: "My Wallet", src: Briefcase, onClick: "/walletOverview" },
    { title: "Trending", src: MaxPicks, onClick: "/coinList" },
    { title: "Settings", src: Settings, onClick: "/settings" },
  ];
  return noSidebar.includes(location.pathname) ? (
    ""
  ) : (
    <div style={{ zIndex: 999 }} className="fixed left-0 top-0">
      <div
        className={` ${
          open ? "w-96" : "w-[58px]"
        } h-screen pt-8 relative duration-300 `}
      >
        <div
          className="absolute top-1/2 left-[20%] -translate-y-1/2 h-[400px] flex flex-col w-[55px] rounded-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(91, 27, 114, 0.5) 0%, rgba(167, 76, 239, 0.165) 100%)",
          }}
        >
          <div className="flex items-center translate-x-1 mt-[10px] flex-col mr-2">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
              onClick={() => navigate("/dashboard")}
            />
            <div className="bg-white p-1 mt-2 rounded-md px-1.5">
              <p className="font-mont font-semibold text-black text-[10px]">
                Alpha
              </p>
            </div>
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Maximum Protocol
            </h1>
          </div>
          <ul className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mt-[30px]">
            {Menus.map((Menu, index) => (
              <button
                onClick={() => navigate(Menu.onClick)}
                key={index}
                className={`w-[55px] flex group ${
                  location.pathname == Menu.onClick ? "bg-bgl2 w-[40px]" : ""
                } relative rounded-md p-2 cursor-pointer ${
                  !open ? "mx-auto" : ""
                } hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}  `}
              >
                <img src={Menu.src} className="h-[25px] w-[25px] mx-auto" />
                <span
                  style={{ zIndex: 999 }}
                  className="absolute hidden px-6 py-2 left-10 text-center text-white bg-bgl2 rounded tooltip-text group-hover:block"
                >
                  {Menu.title}
                </span>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
