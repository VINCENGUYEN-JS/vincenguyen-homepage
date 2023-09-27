import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

import Layout from "../components/layouts/main";
import theme from "../designSystem/theme";
import { AnimatePresence } from "framer-motion";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import type { AppProps } from "next/app";

// _app.tsx will contain the whole app

const client = new ApolloClient({
  uri: "https://gql.hashnode.com/",
  cache: new InMemoryCache(),
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
      `}</style>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="googleAnalytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          <Layout router={router}>
            <AnimatePresence mode="wait" initial={true}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </ApolloProvider>
      </ChakraProvider>
    </>
  );
};

export default Website;
