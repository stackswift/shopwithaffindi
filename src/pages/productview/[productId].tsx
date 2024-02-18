/**
 * ProductView displays the details for a single product.
 * It gets the product ID from the router, finds the matching product
 * from the mock products data, and displays the product details.
 * Allows going back to the product listing.
 */
import { useRouter } from "next/router";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

const ProductView = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Define mock products (replace with your actual product data)
  const mockProducts = [
    {
      id: 1,
      title: "Hoodie",
      description: "This is a M-size hoodie",
      price: 10.99,
      image: "/images/product1.png",
    },
    {
      id: 2,
      title: "Grey hoodie",
      description: "This is a grey hoodie",
      price: 20.99,
      image: "/images/product2.png",
    },
    {
      id: 3,
      title: "Sports hoodie",
      description: "This is L size hoodie",
      price: 20.99,
      image: "/images/product3.png",
    },
    {
      id: 4,
      title: "Pant",
      description: "This a M-size pant",
      price: 20.99,
      image: "/images/product4.png",
    },
    {
      id: 5,
      title: "Jeans",
      description: "This is a L-size jeans",
      price: 20.99,
      image: "/images/product4.png",
    },
    {
      id: 6,
      title: "Torn jeans",
      description: "This is M-size torn jeans",
      price: 20.99,
      image: "/images/jeans2.png",
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
  ];

  // Find the product with matching productId
  const product = mockProducts.find(
    (product) => product.id === parseInt(productId as string)
  );

  const handleBack = () => {
    router.push("/"); // Replace '/' with the actual route of your starting page
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      {product ? (
        <Box p={4}>
          <Flex alignItems="center" mb={4}>
            {/* Display the image here */}
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <Box ml={4}>
              <Heading>{product.title}</Heading>
              <Text>Description: {product.description}</Text>
              {/* Moved the price text here */}
              <Text>Price: ${product.price}</Text>
            </Box>
          </Flex>
          {/* Back button */}
          <Button onClick={handleBack} mt={4}>
            Back
          </Button>
        </Box>
      ) : (
        <Text>Product not found</Text>
      )}
    </Flex>
  );
};

export default ProductView;
