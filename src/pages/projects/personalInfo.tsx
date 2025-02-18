import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "@jes/components/projectCard";

const PersonalInfo = () => {
  return (
    <ProjectCard>
      <Stack textAlign="left">
        <Box>
          <Heading size="2xl">JOSSY DAVID</Heading>
          <Text fontStyle="italic">
            Lead, Product & AI Design @ Termii (YC W20)
          </Text>
        </Box>

        <Box fontSize="xs" fontWeight="bold">
          <Text>African Product Designer of the year</Text>
          <Text>(Nominee - African Tech Awards)</Text>
        </Box>

        <Box fontSize="xs" fontWeight="bold">
          <Text>Brand Designer of the year</Text>
          <Text>(Winner - West African Youth Awards)</Text>
        </Box>

        <Text wordWrap="break-word">
          I currently lead & manage the entire design team at Termii Group (YC
          W20), driving the end-to-end design process for impactful B2B, B2C,
          and CPaaS products, enabling Termii Group (YC W20) to have processed
          over 1 billion transactions.
        </Text>

        <Text>
          Chess nerd - Marvel true believer. Finally, I love travelling &
          exploring, so I am definitely open to relocating anywhere in the
          world.
        </Text>
      </Stack>
    </ProjectCard>
  );
};

export default PersonalInfo;