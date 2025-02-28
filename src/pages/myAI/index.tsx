import { Flex, HStack, Input } from "@chakra-ui/react";

const MyAI = () => {
  return (
    <Flex justifyContent="center" h="100vh" pb="20" w="100%" px="10">
      <HStack alignItems="flex-end" justifyContent="flex-end" mb="10" w={{ base: "100%", md: "50%"}}>
        <Input
          placeholder="Ask me anything"
          border="2px solid #fff"
          _placeholder={{ color: "#000000", marginInlineStart: "2" }}
          px="2"
          w="100%"
        />
      </HStack>
    </Flex>
  );
};

export default MyAI;
