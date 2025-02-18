import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Flex flexDir="column" bg="#00000099" h="100vh" px="1" py="5" gap="32">
      <Box>
        <Text fontSize="6.75px" fontWeight="bold">
          JOSSY DAVID
        </Text>

        <Text fontSize="6.95px">AI/SNR PRODUCT DESIGNER</Text>
      </Box>

      <VStack gap="5">
        {items.map((item) => (
          <Box
            key={item.text}
            px="1.5"
            pt="2"
            pb="1"
            borderRadius="md"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
              bg: "#000"
            }}
          >
            <VStack>
              <Box>
                <Image src={item.icon} alt={item.icon} />
              </Box>
              
              <Text fontSize="9px">{item.text}</Text>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;

const items = [
  { icon: "/home.svg", text: "Home" },
  { icon: "/about.svg", text: "About" },
  { icon: "/project.svg", text: "Projects" },
  { icon: "/gallery.svg", text: "Gallery" },
  { icon: "/ai.svg", text: "My AI" },
];
