// export function kFormatter(val) {
//   const num = Number(val).toFixed(2)
//   return Math.abs(num) > 999
//     ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
//     : Math.sign(num) * Math.abs(num);
// }
export function numFormatter(num) {
  return Math.abs(Number(num)) >= 1.0e+9

  ? (Math.abs(Number(num)) / 1.0e+9).toFixed(2) + "B"
  // Six Zeroes for Millions 
  : Math.abs(Number(num)) >= 1.0e+6

  ? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + "M"
  // Three Zeroes for Thousands
  : Math.abs(Number(num)) >= 1.0e+3

  ? (Math.abs(Number(num)) / 1.0e+3).toFixed(2) + "K"

  : Math.abs(Number(num).toFixed(2));

}
