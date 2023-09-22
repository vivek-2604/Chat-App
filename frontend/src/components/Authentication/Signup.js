import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VStack } from "@chakra-ui/layout";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [cpshow, setCpshow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handlePassClick = () => {
    setShow(!show);
  };

  const handleCpassClick = () => {
    setCpshow(!cpshow);
  };

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (pics.tyepe === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("files", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "cloudofvivek");
      fetch("https://api.cloudinary.com/v1_1/cloudofvivek/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log("pics :", data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log("err:", err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the field",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      toast({
        title: "Password not match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );

      toast({
        title: "Registration Successfull",
        status: "success ",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/api/chats");
    } catch (err) {
      toast({
        title: "Error Occured!",
        description: err.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

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
        w="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Signup
      </Button>
    </VStack>
  );
};

export default Signup;
