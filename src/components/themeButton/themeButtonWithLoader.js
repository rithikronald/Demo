import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
export const ThemeButton = ({ text, width = "", className,onClick }) => {
    const  buttonRef = useRef()
    const [clicked, setClicked] = useState(false)
  return (
    <button
      className={classnames(
        `bg-primaryButton relative ${
          width !== "" ? `w-${width}` : "w-full"
        } text-white p-4 font-semibold rounded-lg  h-16 shadow-lg text-xl ${className}`
      )}
      onClick={() => {
        onClick()
        buttonRef.current.classList.remove('w-0')
        buttonRef.current.classList.add('w-full')
        setTimeout(() => {
            setClicked(true)
        }, 1000)
    }}
    >
        <div ref={buttonRef} className="transition-all ease-out duration-1000 h-full rounded-lg bg-green-500 absolute left-0 top-0 w-0"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">{!clicked ? text : "Success"}</div>
    </button>
  );
};
