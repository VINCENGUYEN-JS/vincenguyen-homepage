const tokenToColorMap = {
  primary: "blue",
  accent: "teal",
  success: "green",
  warning: "yellow",
  error: "red",
  neutral: "grey",
};

const shadesOfColors = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const colorPalettes = Object.entries(tokenToColorMap).reduce(
  (acc: Record<string, any>, [token, color]) => {
    shadesOfColors.forEach((shadeOfColor, index) => {
      acc[`${token}.${shadeOfColor}`] = {
        default: `${color}.${shadeOfColor[shadesOfColors.length - 1 - index]}`,
        _dark: `${color}.${shadeOfColor}`,
      };
    });
    return acc;
  },
  {}
);

export default colorPalettes;
