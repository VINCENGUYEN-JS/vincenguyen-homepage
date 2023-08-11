import Logo from "../logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import RightNavBar from "./RightNavBar";

type LinkItemProps = {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
};

type NavBarProps = {
  path: string;
};

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href;

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      fontWeight="medium"
      p={2}
      bg={active ? "accent.600" : undefined}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props: NavBarProps) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>

        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <RightNavBar />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
