/**
 * Renders the home page.
 *
 * The home page displays a list of products.
 */
import Products from "@/components/Product/Products";
import { Container } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stackies-sale</title>
      </Head>
      <Container maxW="6xl">
        <Products />
      </Container>
    </>
  );
}
