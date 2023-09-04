import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box d="flex" p={3} justifyContent="center" w="100%" m="40px 0 15px 0">
        <Text fontSize="4xl" fontFamily="work sans" color="white">
          Talk A Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="md" borderWidth="1px">
        <Tabs variant="enclosed" isFitted>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login  />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
