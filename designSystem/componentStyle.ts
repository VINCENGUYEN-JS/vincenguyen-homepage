import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const Heading = defineStyleConfig({
  variants: {
    section: (props: StyleFunctionProps) => {
      const { theme } = props;
      const accentColor = theme?.semanticTokens?.colors[`accent.700`];
      return {
        display: "inline-block",
        fontSize: "xl",
        marginTop: 3,
        marginBottom: 4,
        position: "relative",
        _after: {
          position: "absolute",
          content: `""`,
          height: "2px",
          bottom: "-4px",
          margin: "0 auto",
          left: "0",
          right: "0",
          width: "50%",
          background: "green",
          transition: ".5s",
        },
        _hover: {
          bg: mode(accentColor.default, accentColor._dark)(props),
          _after: {
            width: "100%",
          },
        },
      };
    },
  },
});

const Link = defineStyleConfig({
  baseStyle: () => {
    // const { theme } = props;
    // const accentColor = theme?.semanticTokens?.colors[`accent.700`];
    return {
      _hover: {
        textDecoration: "none",
        // bg: mode(accentColor.default, accentColor._dark)(props),
      },
    };
  },
});

const Image = defineStyleConfig({
  variants: {
    thumbNail: {
      borderRadius: 3,
    },
  },
});

export { Heading, Link, Image };
