import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { items, projects } from "@jes/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface ComponentProps {
  isSmallScreen: boolean | undefined;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const MotionBox = motion(Box);

const MobileNav: FC<ComponentProps> = (props) => {
  const { isSidebarOpen, isSmallScreen, toggleSidebar } = props;

  const [isProjectCardOpen, setIsProjectCardOpen] = useState(false);

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

  const toggleProjectCard = () => setIsProjectCardOpen((prev) => !prev);

  return (
    <>
      <AnimatePresence>
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
                  {items.map((item, index) => (
                    <GridItem key={index} className="fadeInZoomOut">
                      <Box
                        px="1.5"
                        pt="2"
                        pb="1"
                        borderRadius="md"
                        onClick={() =>
                          index === items.length - 3
                            ? toggleProjectCard()
                            : () => {}
                        }
                      >
                        <Link
                          to={index === items.length - 3 ? "#" : item.to}
                          style={{ color: "#fff" }}
                        >
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
      </AnimatePresence>

      <AnimatePresence>
        {isProjectCardOpen && (
          <MotionBox
            position="fixed"
            bottom="0"
            w="100%"
            h="100%"
            bg="#000"
            zIndex="3001"
            py="4"
            overflowY="auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <HStack justifyContent="space-between" px="4" py="2">
              <Box onClick={toggleProjectCard} cursor="pointer">
                <Image w="8" h="8" src="/down.png" alt="down-arrow" />
              </Box>

              <Text fontWeight="bold">Projects</Text>
            </HStack>

            <Grid gridTemplateColumns="1fr 1fr" gap="4" p="4">
              {projects.map((project, index) => (
                <Stack key={index}>
                  <Box
                    css={{
                      position: "relative",
                      outline: "8px solid transparent",
                      borderRadius: "xl",
                      transition: "outline-color 0.4s ease-in-out",
                      "&:hover": {
                        outlineColor: "rgba(211, 211, 211, 0.3)",
                        // transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Image src={project.img} alt={project.title} w="100%" />
                  </Box>

                  <HStack>
                    <Image src={project.smallImg} alt={project.subTitle} />

                    <Box>
                      <Text fontSize="13px">{project.title}</Text>
                      <Text fontSize="11px" opacity="0.6">
                        {project.subTitle}
                      </Text>
                    </Box>
                  </HStack>
                </Stack>
              ))}
            </Grid>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
