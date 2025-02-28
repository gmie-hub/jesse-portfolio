import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

interface ComponentProps {
  src: string;
  controls: any;
  objectPosition?: string;
  borderRadius?: string | object;
  borderTopRightRadius?: string;
  borderTopLeftRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
}

const MotionBox = motion(Box);

const PhotoGrid: FC<ComponentProps> = (props) => {
  const {
    src,
    controls,
    borderRadius="4xl",
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    objectPosition = "center",
  } = props;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <Box
        h="100%"
        position="relative"
        // borderTopEndRadius={{ base: "sm", md: "24px" }}
        w="100%"
      >
        <Image
          src={src}
          alt="hot-spicy"
          objectFit="cover"
          h="100%"
          w="100%"
          position="absolute"
          objectPosition={objectPosition}
          inset="0px"
          borderRadius={borderRadius}
          borderTopRightRadius={borderTopRightRadius}
          borderTopLeftRadius={borderTopLeftRadius}
          borderBottomLeftRadius={borderBottomLeftRadius}
          borderBottomRightRadius={borderBottomRightRadius}
        />
      </Box>
    </MotionBox>
  );
};

export default PhotoGrid;
