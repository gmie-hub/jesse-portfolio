import { Flex } from "@chakra-ui/react";
import PersonalInfo from "./personalInfo";
import Experience from "./experience";
import StackAndSocial from "./stackAndSocial";

const About = () => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      mt="10"
      mb={{ base: 20, md: 10 }}
      columnGap="0.5"
      rowGap={{ base: 3, md: 0.5 }}
      mx={{ base: "3" }}
      // alignItems="stretch"
      h={{ md: "580px" }}
    >
      <PersonalInfo />
      <Experience />
      <StackAndSocial />
    </Flex>
  );
};

export default About;
