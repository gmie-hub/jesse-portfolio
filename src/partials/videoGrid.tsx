import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

interface ComponentProps {
  src: string;
  controls: any;
}

const MotionBox = motion(Box);

const VideoGrid: FC<ComponentProps> = ({ controls, src }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <Box
        h="100%"
        bg="#1B75C9"
        w="inherit"
        borderRadius={{ base: "2xl", md: "4xl" }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          h="100%"
          w="100%"
          overflow="hidden"
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              objectPosition: "top",
            }}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default VideoGrid;
