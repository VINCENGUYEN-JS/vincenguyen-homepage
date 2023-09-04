import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../designSystem/theme";
import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";

// _app.tsx will contain the whole app

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
      `}</style>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default Website;
