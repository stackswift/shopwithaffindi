/**
 * Header component that renders site branding, search bar, cart icon,
 * and user authentication. Includes responsive drawer component for cart.
 */
import { useShoppingCart } from "@/context/ShoppingCartContext";
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaBolt, FaShoppingCart, FaSearch } from "react-icons/fa";
import DrawerComponent from "./Drawer";
import { useAuthentication } from "@/lib/hooks/use-authentication";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Header: React.FC = () => {
  const { inputSearchedTerm } = useShoppingCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerRef = useRef(null);
  const { isLoading, isAuthenticated, user } = useAuthentication();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <Box
        as="nav"
        py="6"
        background={"purple.600"}
        fontSize="3xl"
        borderBottom="1px solid #eee"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="2"
      >
        <Container maxW="6xl">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading color={"black"} fontSize={"20px"}>
              Shop with affinidi
            </Heading>

            {/* Search option */}
            <InputGroup mx="10px" maxW="20em">
              <InputLeftElement pointerEvents="none">
                <FaSearch color="black.500" />
              </InputLeftElement>

              <Input
                placeholder="Search"
                size="md"
                variant="filled"
                onChange={(e) => inputSearchedTerm(e.target.value)}
                _focus={{ background: "white" }}
              />
            </InputGroup>

            {/* Cart option */}
            <Flex fontSize="4xl" alignItems="center" justifyContent="center">
              <Button ref={drawerRef} onClick={onOpen}>
                <FaShoppingCart fontSize="24px" />
              </Button>
            </Flex>

            {/* User authentication */}
            <nav>
              {/* Display user information if authenticated */}
              {isAuthenticated ? (
                <Flex alignItems="center">
                  <Avatar size="sm" src={user?.picture} />
                  <Text ml={2} fontSize="sm">
                    Welcome, {user?.firstName}!
                  </Text>
                  <Button ml={4} variant="link" onClick={handleLogout}>
                    Logout
                  </Button>
                </Flex>
              ) : (
                // Display sign-in button if not authenticated
                <Link href="/signin">
                  <Button>Sign In</Button>
                </Link>
              )}
            </nav>
          </Flex>
        </Container>
      </Box>

      {/* Drawer option */}
      <DrawerComponent
        isOpen={isOpen}
        onClose={onClose}
        drawerHeader="Your Cart"
      />
    </>
  );
};

export default Header;
