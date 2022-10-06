import React from "react";
import classnames from "classnames";
export const GradientContainer = ({
  width = "",
  height = "",
  className,
  classNamel1,
  classNamel2,
  children,
}) => {
  return (
    <div
      className={classnames(
        `${width !== "" ? `${width}` : "w-auto"}
        ${
          height !== "" ? `${height}` : "h-auto"
        }  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500  p-[0.5px] ${className}`
      )}
    >
      <div className={`flex w-full h-full bg-bgl2 rounded-2xl ${classNamel1}`}>
        <div className={`bg-gradient-to-b from-maxPurple ... rounded-2xl w-full h-full flex flex-row ${classNamel2}`}>{children}</div>
      </div>
    </div>
  );
};
