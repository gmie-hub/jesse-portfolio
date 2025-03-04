import {
  Box,
  HStack,
  Image,
  Separator,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProjectCard from "@jes/components/projectCard";
import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DesktopView from "./desktopView";
import { images } from "@jes/utils/data";
import MobileView from "./mobileView";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const controls = useAnimation();
  const lastWheelTime = useRef(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleWheel = (event: WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 1000) return;
    lastWheelTime.current = now;

    const direction = event.deltaY > 0 ? "down" : "up";

    if (direction === "down" && activeIndex < images.length - 1) {
      controls.start({ scale: 0.8, transition: { duration: 0.5 } }).then(() => {
        setActiveIndex((prev) => prev + 1);
        controls.start({
          scale: 1,
          transition: { duration: 0.5 },
        });
      });
    } else if (direction === "up" && activeIndex > 0) {
      controls.start({ scale: 1.2, transition: { duration: 0.5 } }).then(() => {
        setActiveIndex((prev) => prev - 1);
        controls.start({
          scale: 1,
          transition: { duration: 0.5 },
        });
      });
    }
  };

  // const handleDragEnd = (event: any, info: PanInfo) => {
  //   const { offset, velocity } = info;
  //   const swipeThreshold = 50;
  //   const direction =
  //     offset.x > swipeThreshold
  //       ? "right"
  //       : offset.x < -swipeThreshold
  //       ? "left"
  //       : null;

  //   if (direction === "left" && activeIndex < images.length - 1) {
  //     setActiveIndex((prev) => prev + 1);
  //   } else if (direction === "right" && activeIndex > 0) {
  //     setActiveIndex((prev) => prev - 1);
  //   }
  // };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("wheel", handleWheel);
      return () => window.removeEventListener("wheel", handleWheel);
    }
  }, [activeIndex]);

  const thumbnailSize = Math.max(50 - images.length * 2, 30);

  return (
    <Box w="full" bg="rgba(0, 0, 0, 0.5)" overflow="hidden">
      <HStack h="full" my="2">
        {!isMobile && (
          <Stack
            justifyContent="space-between"
            h="full"
            ms={{ md: "2"}}
            me={{ md: "5"}}
            pt="3"
            pb="6"
            borderRadius="md"
          >
            <Image src="si_projects.svg" alt="icon" />
            <Image src="fly.svg" />
          </Stack>
        )}

        <Box w="full" m={{ md: "1" }}>
          <ProjectCard>
            <Stack h="100vh">
              <Stack>
                <Text textAlign="start" fontWeight="semibold">
                  Gallery
                </Text>
                <Separator />
              </Stack>

              {isMobile ? (
                <MobileView />
              ) : (
                <DesktopView
                  activeIndex={activeIndex}
                  controls={controls}
                  thumbnailSize={thumbnailSize}
                />
              )}
            </Stack>
          </ProjectCard>
        </Box>
      </HStack>
    </Box>
  );
};

export default Gallery;
