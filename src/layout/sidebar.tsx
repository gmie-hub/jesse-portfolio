import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { items } from "@jes/utils/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({
  setIsProjectOpen,
}: {
  setIsProjectOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleClick = (itemText: string) => {
    setClickedItem(itemText);

    setTimeout(() => {
      setClickedItem(null);
    }, 300);
  };

  return (
    <Flex flexDir="column" bg="#00000099" h="100vh" px="1" py="5" gap="32">
      <Box textAlign="center">
        <Text fontSize="6.75px" fontWeight="bold">
          JOSSY DAVID
        </Text>

        <Text fontSize="6.95px">AI/SNR PRODUCT DESIGNER</Text>
      </Box>

      <VStack gap="5">
        {items.map((item, index) => (
          <Box
            key={index}
            px="1.5"
            pt="2"
            pb="1"
            borderRadius="md"
            className={clickedItem === item.text ? "zoomInOut" : ""}
              onClick={() =>
                index === items.length - 3
                  ? setIsProjectOpen((prev: boolean) => !prev)
                  : handleClick(item.text)
              }
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
              bg: "#000",
            }}
          >
            <Link to={index === items.length - 3 ? "#" : item.to} style={{ color: "#fff" }}>
              <VStack>
                <Box>
                  <Image src={item.icon} alt={item.icon} />
                </Box>

                <Text fontSize="9px">{item.text}</Text>
              </VStack>
            </Link>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
