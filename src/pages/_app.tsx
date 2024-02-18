/**
 * MyApp is the root component that wraps the entire app.
 * It provides global state management and theming via providers.
 * Renders the Layout component and passes props to nested routes.
 */
import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { theme } from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ShoppingCartProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>
    </ShoppingCartProvider>
  );
}

export default MyApp;
