import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Separator,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProjectCard from "@jes/components/projectCard";
import { socialLinks, stackData } from "@jes/utils/data";

const StackAndSocial = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Stack w={{ md: "235px" }} gap="0.5" h="full">
      <Box>
        <ProjectCard>
          <Stack textAlign="start">
            <Heading fontWeight="medium" size="2xl">
              Ready to travel
            </Heading>

            <Text color="#FF5FE1" fontWeight="bold" fontSize="sm">
              Open to relocation - {!isSmallScreen && <br />} anywhere
            </Text>
          </Stack>
        </ProjectCard>
      </Box>

      <Box h="fit-content">
        <ProjectCard>
          <Stack gap="4">
            <Box>
              <Text fontSize="13px" fontWeight="medium" textAlign="start">
                Some of my tech stacks...
              </Text>

              <Separator />
            </Box>

            <Flex justifyContent="center" w="100%">
              <Grid
                templateColumns="1fr 1fr 1fr"
                w="100%"
                rowGap="4"
                columnGap="8"
                alignItems="center"
                justifyContent="space-between"
              >
                {stackData.map((item, index) => (
                  <GridItem key={index}>
                    <Image src={item} />
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Stack>
        </ProjectCard>
      </Box>

      <Grid templateColumns="1fr 1fr 1fr" templateRows="1fr 1fr 1fr" gap="1px">
        {socialLinks.map((item, index) => (
          <GridItem key={index}>
            <ProjectCard h="100%">
              <Center>
                <Image src={item} />
              </Center>
            </ProjectCard>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default StackAndSocial;
