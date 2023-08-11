import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useSound from "use-sound";

import Motion from "./animation/Motion";
import click from "../public/click.mp3";
import { composeFn } from "../helpers/utilities";

const AnimatedThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const [play] = useSound(click);
  return (
    <Motion>
      <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue("purple", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={composeFn(play, toggleColorMode)}
      />
    </Motion>
  );
};

export default AnimatedThemeToggleButton;
