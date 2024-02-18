/**
 * SignInPage component renders a simple sign in form.
 * Allows users to sign in with email/password or with Affinidi.
 */
import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { clientLogin } from "@/lib/auth/client-login";

const SignInPage: React.FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Stack spacing={4} w="300px">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Text textAlign="center">or</Text>
        <Button onClick={clientLogin} colorScheme="blue" variant="outline">
          Login with Affinidi
        </Button>
      </Stack>
    </Flex>
  );
};

export default SignInPage;
