import Head from "next/head";
import Navbar from "../navbar/NavBar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Vince Nguyen - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container pt={16}>{children}</Container>
    </Box>
  );
};

export default Main;
