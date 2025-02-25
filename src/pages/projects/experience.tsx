import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProjectCard from "@jes/components/projectCard";
import EmailCard from "@jes/partials/emailCard";

const Experience = () => {
  const experienceData = [
    {
      location: "USA",
      job: (
        <>
          Lead, Product & AI Design{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Termii (YCW20)
        </>
      ),
    },
    {
      location: "Lagos",
      job: (
        <>
          Lead, Product & AI Design{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Pi-search AI
        </>
      ),
    },
    {
      location: "Sweden",
      job: (
        <>
          Snr Product Designer{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Proxify
        </>
      ),
    },
    {
      location: "USA",
      job: (
        <>
          Head of AI Design{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Pioneons AI
        </>
      ),
    },
    {
      location: "Bournemouth, UK",
      job: (
        <>
          Principal UX Designer{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          MyadmissionLink
        </>
      ),
    },
    {
      location: "USA",
      job: (
        <>
          Principal Product Designer{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Clevermoni
        </>
      ),
    },
    {
      location: "USA",
      job: (
        <>
          Head of Product Design{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Anamo
        </>
      ),
    },
    {
      location: "Lagos",
      job: (
        <>
          Senior Product Designer{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          PennyTree
        </>
      ),
    },
    {
      location: "USA",
      job: (
        <>
          Product Market Designer{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Chow420 - Chow AI
        </>
      ),
    },
    {
      location: "USA",
      job: (
        <>
          Product Consultant{" "}
          <Text as="span" opacity="0.6">
            at
          </Text>{" "}
          Umify
        </>
      ),
    },
  ];

  return (
    <Stack gap="0.5" w={{ md: "490px"}} h="full">
      <Flex flexDir={{ base: "column", lg: "row" }} gap="0.5">
        <ProjectCard>
          <EmailCard email="davejossy9@gmail.com" emailType="Email 1" />
        </ProjectCard>

        <ProjectCard>
          <EmailCard email="designsamurai24@gmail.com" emailType="Email 2" />
        </ProjectCard>
      </Flex>

      <Stack position="relative" h="full" p="3" borderRadius="md">
        <Box
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="url('/experience-bg.png')"
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="md"
          zIndex="0"
          _before={{
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            borderRadius: "md",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: "1",
          }}
        />

        <HStack pos="relative" zIndex="1">
          <Center bg="#FFF8D6" px="1" py="1.5" borderRadius="md">
            <Image src="/experience.svg" alt="box" />
          </Center>
          <Heading fontWeight="medium" size="2xl">9+ YEARS EXPERIENCE</Heading>
        </HStack>

        <ProjectCard bg="rgba(0, 0, 0, 0.5)" h="full" >
          <Stack>
            <Box>
              <Text fontSize="13px" fontWeight="medium" textAlign="start">
                Some places i've worked
              </Text>
              <Separator />
            </Box>

            <Stack gap="3">
              {experienceData.map((item, index) => (
                <HStack
                  key={index}
                  gap="12"
                  fontSize="13px"
                  fontWeight="medium"
                  justifyContent="space-between"
                >
                  <Box w="20%">
                    <Text opacity="0.4" textAlign="start">{item.location}</Text>
                  </Box>

                  <HStack justifyContent="flex-start" w="80%" zIndex="2">
                    <Text textAlign="start" color="#fff">{item.job}</Text>
                  </HStack>
                </HStack>
              ))}
            </Stack>
          </Stack>
        </ProjectCard>
      </Stack>
    </Stack>
  );
};

export default Experience;