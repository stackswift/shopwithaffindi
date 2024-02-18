/**
 * DrawerComponent is a React component that renders a drawer with the user's
 * shopping cart items.
 *
 * It displays the cart items, total price, and a checkout modal if the user
 * is authenticated. It handles updating the total price when the cart changes,
 * retrieving user info on mount, and updating user info on input change.
 *
 * The checkout modal gathers shipping address and other info before proceeding
 * to payment.
 */
import React, { useEffect, useRef, useState } from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
  useDisclosure,
  useToast,
  Flex,
} from "@chakra-ui/react";
import CartItemInDrawer from "../CartItemInDrawer";
import { useAuthentication } from "@/lib/hooks/use-authentication";
import { UserInfo } from "@/types/types";

interface DrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
  drawerHeader: string;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  isOpen,
  onClose,
  drawerHeader,
}) => {
  const { cartItems, clearCartItems, getTotalPrice } = useShoppingCart();

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [usersBirthday, setUsersBirthday] = useState<boolean>(false);
  const { user, isAuthenticated, isLoading } = useAuthentication();
  const toast = useToast();

  const btnRef = useRef<HTMLButtonElement>(null);
  const drawerDisclosure = useDisclosure();
  const modalDisclosure = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handler = () => {
    modalDisclosure.onOpen();
  };

  const [userData, setUserData] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    setTotalPrice(getTotalPrice());
    if (user) {
      setUserData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        address: user.address || "",
        postalCode: user.postalCode || "",
        city: user.city || "",
        country: user.country || "",
        birthdate: user.birthdate || "",
      });
    }
  }, [user, totalPrice, getTotalPrice]);
  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const payment = () => {
    if (isAuthenticated && user && userData) {
      modalDisclosure.onClose();
      onClose();
      clearCartItems();

      return toast({
        title: `Redirecting to Payment Gateway`,
        description: "Checkout succesful.",
        status: "success",
        position: "top",
        variant: "subtle",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const renderCheckoutModal = () => {
    if (isAuthenticated && user && cartItems.length > 0) {
      return (
        <>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Button bg={"blue.500"} onClick={handler}>
              Checkout
            </Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={modalDisclosure.isOpen}
              onClose={modalDisclosure.onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Checkout Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input
                      value={userData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input
                      value={userData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      value={userData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Address</FormLabel>
                    <Input
                      value={userData.address}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Postal Code</FormLabel>
                    <Input
                      value={userData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input
                      value={userData.city}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel> Country</FormLabel>
                    <Input
                      value={userData.country}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button onClick={payment} colorScheme="blue" mr={3}>
                    Proceed to Payment
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </>
      );
    } else {
      <Text>Kindly login to Checkout</Text>;
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent w="30em" mx="auto" roundedLeft="lg">
        <DrawerCloseButton mt="2" />
        <DrawerHeader>{drawerHeader}</DrawerHeader>

        <DrawerBody>
          <Grid templateColumns="repeat(2, 1fr)">
            {cartItems?.map((item) => (
              <CartItemInDrawer {...item} key={item.id} />
            ))}
          </Grid>

          {cartItems.length > 0 && (
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              mb={5}
              p={2}
              borderBottom={"1px solid gray"}
            >
              <Text>
                Total Amount : <strong>${totalPrice}</strong>
              </Text>
            </Flex>
          )}
          {cartItems.length == 0 && <Text>Kindly add items to cart</Text>}

          {renderCheckoutModal()}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
