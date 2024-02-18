/**
 * Products component displays a grid of product cards.
 * It fetches mock products data and filters based on search term.
 * Shows loading state while data is fetching.
 * Allows navigating to next page via handleNextPage.
 * Products are displayed in a SimpleGrid layout.
 */
import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  CircularProgress,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import SingleProduct from "./SingleProduct";
import { useRouter } from "next/router"; // Import useRouter

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    image: "/images/product1.png",
    title: "Hoodie",
    price: 10.99,
    description: "This is a M-size hoodie",
  },
  {
    id: 2,
    image: "/images/product2.png",
    title: "Grey hoodie",
    price: 20.99,
    description: "This is a grey hoodie",
  },

  {
    id: 3,
    image: "/images/product3.png",
    title: "Sports hoodie",
    price: 20.99,
    description: "This is L size hoodie",
  },
  {
    id: 4,
    image: "/images/product4.png",
    title: "Pant",
    price: 20.99,
    description: "This a M-size pant",
  },
  {
    id: 5,
    image: "/images/Jeans1.png",
    title: "Jeans",
    price: 20.99,
    description: "This is a L-size jeans",
  },
  {
    id: 6,
    image: "/images/jeans2.png",
    title: "Torn jeans",
    price: 20.99,
    description: "This is M-size torn jeans",
  },
  {
    id: 7,
    image: "/images/tee.png",
    title: "Cool t-shirt",
    price: 20.99,
    description: "This is a L-size t-shirt",
  },
  {
    id: 8,
    image: "/images/jacket2.png",
    title: "Winter coat",
    price: 20.99,
    description: "This is XL-size winter coat",
  },
  {
    id: 9,
    image: "/images/jacket1.png",
    title: "Leather jacket",
    price: 20.99,
    description: "This is a M-size leather jacket",
  },
  // Add more mock products as needed
];

const Products: React.FunctionComponent = () => {
  const { searchTerm } = useShoppingCart();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter(); // Use useRouter

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNextPage = () => {
    router.push("/NextPage"); // Navigate to the next page using useRouter
  };

  return (
    <Box mt="32">
      {isLoading ? (
        <Center>
          <CircularProgress isIndeterminate color="blue.500" />
        </Center>
      ) : (
        <>
          <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10} my="10">
            {mockProducts
              .filter((product: Product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(({ id, image, title, price, description }) => (
                <SingleProduct
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  description={description}
                  price={price}
                  addToCart={() => {}} // Ensure addToCart prop is provided
                />
              ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
};

export default Products;
