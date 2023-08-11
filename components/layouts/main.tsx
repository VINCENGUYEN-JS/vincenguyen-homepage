import Head from "next/head";
import Navbar from "../navbar/NavBar";
import { Box, Container } from "@chakra-ui/react";
import { NextRouter } from "next/router";

type MainProps = {
  children: React.ReactNode;
  router: NextRouter;
};

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Navbar path={router.asPath} />
      <Container pt={16}>{children}</Container>
    </Box>
  );
};

export default Main;
