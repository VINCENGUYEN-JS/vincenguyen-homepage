type ColorKey = keyof typeof tokenToColorMap;
type ColorValue = (typeof tokenToColorMap)[ColorKey];
type ShadesOfColors = (typeof shadesOfColors)[number];
type ColorShades = `${ColorKey}.${ShadesOfColors}`;
type ColorMode = {
  default: `${ColorValue}.${ShadesOfColors}`;
  _dark: `${ColorValue}.${ShadesOfColors}`;
};

const tokenToColorMap = {
  primary: "blue",
  accent: "teal",
  success: "green",
  warning: "yellow",
  error: "red",
  neutral: "gray",
  alpha: "whiteAlpha",
} as const;

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
] as const;

const colorPalettes: Partial<Record<ColorShades, ColorMode>> = Object.entries(
  tokenToColorMap
).reduce((acc: Partial<Record<ColorShades, ColorMode>>, [token, color]) => {
  shadesOfColors.forEach((shadeOfColor, index) => {
    const idx = shadesOfColors.length - 1 - index;
    const key = `${token}.${shadeOfColor}` as ColorShades;
    acc[key] = {
      default: `${color}.${shadesOfColors[idx]}`,
      _dark: `${color}.${shadeOfColor}`,
    };
  });
  return acc;
}, {});

export default colorPalettes;
