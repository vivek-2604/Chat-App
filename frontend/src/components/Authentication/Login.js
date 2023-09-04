import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlePassClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {};

  return (
    <VStack>
      <FormControl isRequired id="email">
        <FormLabel>Email</FormLabel>
        <Input
          placeContent="Enter Your Email-id"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeContent="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button
              paddingX="1.5rem"
              marginRight="1rem"
              h="1.75rem"
              size="sm"
              onClick={handlePassClick}
            >
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        w="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        w="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Login as Guest
      </Button>
    </VStack>
  );
};

export default Login;
