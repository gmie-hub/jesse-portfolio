import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "@jes/components/projectCard";

const Experience = () => {
  return (
    <Stack>
      <Flex>
        <ProjectCard>
          <HStack>
            <Box>
              <Text>Email 1</Text>
              <Text>davejossy9@gmail.com</Text>
            </Box>

            
          </HStack>
        </ProjectCard>
      </Flex>
    </Stack>
  );
};

export default Experience;
