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
  const galleryRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const galleryElement = galleryRef.current;
    
    if (galleryElement && !isMobile) {
      galleryElement.addEventListener("wheel", handleWheel);
      return () => galleryElement.removeEventListener("wheel", handleWheel);
    }
  }, [activeIndex]);

  const thumbnailSize = Math.max(50 - images.length * 2, 30);

  return (
    <Box
      ref={galleryRef}
      w="100%"
      h="100%"
      bg="rgba(0, 0, 0, 0.5)"
      overflow="auto"
      py="2"
      pe={{ md: "1" }}
    >
      <HStack
        h="100%"
        borderRadius={{ md: "2xl" }}
        bg="rgba(30, 30, 30, 0.50)"
      >
        {!isMobile && (
          <Stack
            justifyContent="space-between"
            h="full"
            ms={{ md: "2" }}
            me={{ md: "5" }}
            pt="3"
            pb="6"
            borderRadius="md"
          >
            <Image src="si_projects.svg" alt="icon" />
            <Image src="fly.svg" />
          </Stack>
        )}

        <Box w="full" h="100%">
          <ProjectCard h="100%">
            <Stack h="100%">
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
