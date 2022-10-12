import { useEffect, useRef } from "react";
import { useState } from "react";

export function Tabs({ data, onClick }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  
    const tabsRef = useRef([]);
  
    useEffect(() => {
      function setTabPosition() {
        const currentTab = tabsRef.current[activeTabIndex];
        setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
        setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
      }
  
      setTabPosition();
      window.addEventListener("resize", setTabPosition);
  
      return () => window.removeEventListener("resize", setTabPosition);
    }, [activeTabIndex]);
  
    return (
      <>
        <div className="relative">
          <div className="flex space-x-10 text-white text-sm font-semibold  items-center justify-center">
            {data.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="pt-2 pb-3"
                  onClick={() => {
                    onClick(idx)
                    setActiveTabIndex(idx)
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span
            className="absolute bottom-0 block h-1 bg-primaryButton rounded-md transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
        </div>
      </>
    );
  }
  