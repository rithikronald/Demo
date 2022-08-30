import React from "react";
import classnames from "classnames";
export const GradientContainer = ({
  width = "",
  height = "",
  className,
  children,
}) => {
  return (
    <div
      className={classnames(
        `${width !== "" ? `${width}` : "w-1/5"}
        ${
          height !== "" ? `${height}` : "h-20"
        }  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500  p-[1px] ${className}`
      )}
    >
      <div className="bg-bg rounded-2xl h-full flex flex-col justify-center items-center">{children}</div>
    </div>
  );
};
