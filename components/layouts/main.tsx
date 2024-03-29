import Head from "next/head";
import Navbar from "../navbar/NavBar";
import { Container } from "@chakra-ui/react";
import { NextRouter } from "next/router";
import { useRouter } from "next/router";

import favicon from "../../public/favicon/favicon.ico";
import favicon16 from "../../public/favicon/favicon-16x16.png";
import favicon32 from "../../public/favicon/favicon-32x32.png";
import appleIcon from "../../public/favicon/apple-touch-icon.png";

type MainProps = {
  children: React.ReactNode;
  router: NextRouter;
};

const Main = ({ children, router }: MainProps) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href={favicon.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon.src} />
      </Head>
      <Navbar path={router.asPath} />
      {route.pathname === "/posts" ? (
        <Container pt={16} maxW="8xl">
          {children}
        </Container>
      ) : (
        <Container pt={16}>{children}</Container>
      )}
    </>
  );
};

export default Main;
