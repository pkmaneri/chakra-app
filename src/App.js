import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa"
import Header from "./component/header";
import Profile from "./component/profile";
import Social from "./component/social";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%" >
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">imthept</Heading>
        <Spacer></Spacer>
        <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header/>
      <Profile/>
      <Social/>

    </VStack>
  );
}

export default App;
