import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import AnimatedThemeToggleButton from "../buttons/ThemeToggleButton";
import {
  Box,
  Menu,
  MenuItem,
  Avatar,
  MenuList,
  Tooltip,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import Motion from "../animation/Motion";

const AnimatedAvartar = () => (
  <Motion>
    <Tooltip hasArrow label="Nice to meet you" placement="right-end">
      <Avatar
        display={{ base: "none", md: "block" }}
        name="Vince Nguyen"
        size="md"
        src="images/avartar.jpg"
      />
    </Tooltip>
  </Motion>
);

const RightNavBar = () => (
  <>
    <AnimatedThemeToggleButton />
    <AnimatedAvartar />

    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
      <Menu isLazy id="navbar-menu">
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Options"
        />
        <MenuList>
          <MenuItem as="a" href="/">
            About
          </MenuItem>
          <MenuItem as="a" href="/works">
            Works
          </MenuItem>
          <MenuItem as="a" href="/posts">
            Posts
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  </>
);

export default RightNavBar;
