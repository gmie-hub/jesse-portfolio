import { Box, Grid, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { projects } from "@jes/utils/data";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProjectDrawerContent = () => {
  return (
    <MotionBox
      // w="400px"
      h="calc(100vh - 32px)"
      position="absolute"
      top="16px"
      borderRadius="xl"
      left="54px"
      bg="rgba(0, 0, 0, 0.8)"
      shadow="xl"
      px="4"
      py="6"
      zIndex="10"
      overflowY="auto"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none", // IE and Edge
        "scrollbar-width": "none", // Firefox
      }}
    >
      <Text color="#e1e1e1" textAlign="center" mb="2">
        Project
      </Text>

      <Grid gridTemplateColumns="1fr 1fr" gap="4">
        {projects.map((project, index) => (
          <Stack key={index} >
            <Box
              css={{
                position: "relative",
                outline: "8px solid transparent",
                borderRadius: "xl",
                transition: "outline-color 0.4s ease-in-out",
                "&:hover": {
                  outlineColor: "rgba(211, 211, 211, 0.3)",
                },
              }}
            >
              <Image src={project.img} alt={project.title} w="100%" />
            </Box>

            <HStack>
              <Image src={project.smallImg} alt={project.subTitle} />

              <Box>
                <Text fontSize="13px">{project.title}</Text>
                <Text fontSize="11px" opacity="0.6">{project.subTitle}</Text>
              </Box>
            </HStack>
          </Stack>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default ProjectDrawerContent;
