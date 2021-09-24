import Layout from "../components/Layout/Layout";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        )
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
