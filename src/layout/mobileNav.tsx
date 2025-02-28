import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { items } from "@jes/utils/data";
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface ComponentProps {
  isSmallScreen: boolean | undefined;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const MobileNav: FC<ComponentProps> = (props) => {
  const { isSidebarOpen, isSmallScreen, toggleSidebar } = props;
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = () => {
      if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
        if (isSidebarOpen) toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <>
      {isSmallScreen && (
        <Box
          ref={menuRef}
          position="fixed"
          bottom="0"
          w="100%"
          bg="#000"
          zIndex="1000"
          p="4"
          className={isSidebarOpen ? "slideUp" : "slideDown"}
        >
          <HStack justifyContent="space-between">
            <Box textAlign="start">
              <Text fontSize="sm" fontWeight="bold">
                JOSSY DAVID
              </Text>

              <Text fontSize="xs">AI/SNR PRODUCT DESIGNER</Text>
            </Box>

            <Box onClick={toggleSidebar} cursor="pointer">
              <Image src="/menu.svg" alt="menu" w="8" h="6" />
            </Box>
          </HStack>

          {isSidebarOpen && (
            <Box mt="12" mx="8" mb="5">
              <Grid templateColumns="1fr 1fr 1fr" rowGap="4">
                {items.map((item) => (
                  <GridItem key={item.text} className="fadeInZoomOut">
                    <Box px="1.5" pt="2" pb="1" borderRadius="md">
                      <Link to={item.to} style={{ color: "#fff" }}>
                        <VStack>
                          <Box>
                            <Image src={item.icon} alt={item.icon} />
                          </Box>

                          <Text fontSize="xs" fontWeight="semibold">
                            {item.text}
                          </Text>
                        </VStack>
                      </Link>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default MobileNav;
