import { extendTheme } from "@chakra-ui/react";

import { Heading, Link } from "./componentStyle";
import styles from "./globalStyles";
import colorPalettes from "./colorPalettes";

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components: {
    Heading,
    Link,
  },
  fonts,
  colors,
  semanticTokens: {
    colors: colorPalettes,
  },
});
export default theme;
