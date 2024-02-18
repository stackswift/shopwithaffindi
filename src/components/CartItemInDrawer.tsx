/**
 * CartItemInDrawer component renders a cart item.
 * It displays the item image, title, price and a button to remove the item.
 * It uses the ShoppingCartContext to get cart data and remove items.
 */
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  Text,
  Image,
} from "@chakra-ui/react";
import { CartItemsProps, useShoppingCart } from "@/context/ShoppingCartContext";
import { mockProducts } from "../components/Product/Products";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}

const CartItemInDrawer: React.FC<CartItemsProps> = ({ id }: CartItemsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { removeItem } = useShoppingCart();

  // Find the item with the given id from mockProducts
  const item = id
    ? mockProducts.find((product: Product) => product.id === id)
    : undefined;

  return (
    <>
      {isLoading ? (
        <Center>
          <CircularProgress isIndeterminate color="blue.500" />
        </Center>
      ) : (
        item && (
          <Box maxW="72" border="1px solid #eee" p="3" my="3">
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              objectFit="contain"
            />
            <Text fontSize="md" fontWeight="semibold" noOfLines={1}>
              {item.title}
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              $ {item.price}
            </Text>
            <Button
              w="full"
              mt="2"
              colorScheme="red"
              onClick={() => removeItem(item.id)}
            >
              Remove Product
            </Button>
          </Box>
        )
      )}
    </>
  );
};

export default CartItemInDrawer;
