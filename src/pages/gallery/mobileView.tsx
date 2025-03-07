import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { images } from "@jes/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

const MobileView = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < images.length - 1) {
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex((prev) => prev - 1);
      }
    },
    // preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <VStack
      ref={containerRef}
      position="relative"
      w="100%"
      h="80vh"
      overflow="hidden"
    >
      <Box
        {...handlers}
        w="100vw"
        h="100%"
        flex="0 0 auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ position: "absolute" }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              maxW="100%"
              maxH="50%"
              objectFit="cover"
              borderRadius="lg"
              boxShadow="lg"
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      <HStack position="absolute" bottom="20px" zIndex="3">
        {images.map((_, index) => (
          <Box
            key={index}
            w={currentIndex === index ? "10px" : "6px"}
            h={currentIndex === index ? "10px" : "6px"}
            bg={currentIndex === index ? "white" : "gray.400"}
            borderRadius="full"
            transition="all 0.3s ease"
            mx="2"
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default MobileView;
