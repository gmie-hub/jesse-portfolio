import { Flex, Input, VStack } from "@chakra-ui/react";

const MyAI = () => {
  return (
    <Flex justifyContent="center" h="100vh">
      <VStack w="50%" justifyContent="flex-end" mb="10">
        <Input
          placeholder="Ask me anything"
          border="2px solid #fff"
          _placeholder={{ color: "#000000", marginInlineStart: "2" }}
          px="2"
        />
      </VStack>
    </Flex>
  );
};

export default MyAI;
