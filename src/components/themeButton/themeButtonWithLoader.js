import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
export const ThemeButton = ({
  status,
  setStatus,
  text,
  width = "",
  className,
  onClick,
}) => {
  const buttonRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('a nice bitch', status, clicked)
    if(!status) return
    setClicked(true);
    buttonRef.current.classList.remove("w-0");
    buttonRef.current.classList.add("w-full");
    setTimeout(() => {
      buttonRef.current.classList.remove("w-full");
      buttonRef.current.classList.add("w-0");
      setClicked(false);
      setStatus(null)
    }, 3000);
  }, [counter, status]);
  return (
    <button
      className={classnames(
        `bg-primaryButton relative ${
          width !== "" ? `w-${width}` : "w-full"
        } text-white p-4 font-semibold rounded-lg  h-16 shadow-lg text-xl ${className}`
      )}
      onClick={() => {
        onClick();
        setCounter(counter + 1)
      }}
    >
      <div
        ref={buttonRef}
        className={`transition-all ease-out duration-1000 h-full rounded-lg ${status == "Success" ? 'bg-green-500' : 'bg-red-500'} absolute left-0 top-0 w-0`}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        {!clicked ? text : status}
      </div>
    </button>
  );
};
