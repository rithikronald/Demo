import { useWindowDimensions } from "../hooks/useWindowDimension";

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
const w = 1695,
  h = 967,
  FIGMA_HEIGHT = 967,
  FIGMA_WIDTH = 1695;
export const wp = async (dimension) => {
  // let percent = (dimension / FIGMA_WIDTH) * 100;
  // let data = ((percent / 100) * w).toFixed(1) + "px";
  console.log("w", ((dimension / FIGMA_WIDTH) * w).toFixed(1) + "px");
  return ((dimension / FIGMA_WIDTH) * w).toFixed(1) + "px";
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = (dimension) => {
  // let percent = (dimension / FIGMA_HEIGHT) * 100;
  // let data = ((percent / 100) * h).toFixed(1) + "px";
  console.log("h", ((dimension / FIGMA_HEIGHT) * h).toFixed(0) + "px");
  // return data.toString();
  return ((dimension / FIGMA_HEIGHT) * h).toFixed(0) + "px";
};

export const homeStles = () => `App bg-bgl1 flex h-screen w-[${wp(1695)}]`;
