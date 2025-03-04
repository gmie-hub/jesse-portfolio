import { Box, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import { images } from "@jes/utils/data";
import { motion } from "framer-motion";
import { FC } from "react";

interface DesktopViewProps {
  activeIndex: number;
  controls: any;
  thumbnailSize: number;
}

const MotionImage = motion(Image);

const DesktopView: FC<DesktopViewProps> = ({
  activeIndex,
  controls,
  thumbnailSize,
}) => {
  return (
    <HStack flex="1">
      <Flex w="full" minH="100%" justifyContent="center" alignItems="center">
        <MotionImage
          key={activeIndex}
          src={images[activeIndex]}
          maxW="500px"
          borderRadius="lg"
          initial={{ scale: 1 }}
          animate={controls}
        />
      </Flex>

      <VStack
        gap={1}
        position="absolute"
        right={5}
        top="50%"
        transform="translateY(-50%)"
      >
        {images.map((src, index) => (
          <Box
            key={index}
            h={`${thumbnailSize}px`}
            w={`${(thumbnailSize / 50) * 60}px`}
            overflow="hidden"
            border={index === activeIndex ? "2px solid red" : "2px solid gray"}
            transition="all 0.3s ease"
          >
            <Image src={src} objectFit="cover" />
          </Box>
        ))}
      </VStack>
    </HStack>
  );
};

export default DesktopView;
