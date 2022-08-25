import React from "react";
import classnames from "classnames";
export const ThemeButton = ({ text, width = "", className }) => {
  return (
    <button
      className={classnames(
        `bg-primaryButton ${
          width !== "" ? `w-${width}` : "w-full"
        } text-white p-4 font-bold rounded-lg  h-16 shadow-lg text-xl ${className}`
      )}
    >
      {text}
    </button>
  );
};
