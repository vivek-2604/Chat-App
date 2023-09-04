import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

import "./Signup.css";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [cpshow, setCpshow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();

  const handlePassClick = () => {
    setShow(!show);
  };

  const handleCpassClick = () => {
    setCpshow(!cpshow);
  };

  const postDetails = (pics) => {};

  const submitHandler = () => {};

  return (
    <VStack>
      <FormControl isRequired id="first-name">
        <FormLabel>Name</FormLabel>
        <Input
          placeContent="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl isRequired id="confirm-pssword">
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={cpshow ? "text" : "password"}
            placeContent="Enter Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement>
            <Button
              paddingX="1.5rem"
              marginRight="1rem"
              h="1.75rem"
              size="sm"
              onClick={handleCpassClick}
            >
              {cpshow ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired id="pic">
        <FormLabel>Profile Pic</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        // className="gradient-button"
        colorScheme="blue"
        w="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Signup
      </Button>
    </VStack>
  );
};

export default Signup;
