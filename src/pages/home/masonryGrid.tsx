import { Box, Grid, HStack, Image, Text } from "@chakra-ui/react";
import PhotoGrid from "@jes/partials/photoGrid";
import VideoGrid from "@jes/partials/videoGrid";
import routes from "@jes/routes";
import { motion } from "framer-motion";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface MasonryGridProps {
  leftControls: any;
  rightControls: any;
  middleControls: any;
  handleClick: () => void;
}

const MotionBox = motion(Box);

const MasonryGrid: FC<MasonryGridProps> = ({
  leftControls,
  rightControls,
  middleControls,
  handleClick,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(routes.main.about);
  };

  return (
    <Grid
      templateColumns={{
        base: "repeat(3, 1fr)",
        md: "repeat(5, minmax(0, 1fr))",
      }}
      h="100%"
      py={{ base: "2", md: "3" }}
      columnGap={{ base: "2", md: "3" }}
      justifyContent={{ base: "center", md: "initial" }}
      // transform={{ base: "translateX(-33.33%)", md: "none" }}
    >
      <Grid
        rowGap="3"
        gridTemplateRows="1fr 2fr"
        h="full"
        display={{ base: "none", md: "grid" }}
      >
        <PhotoGrid
          src="/hotSpicy.png"
          objectPosition="bottom"
          borderTopLeftRadius="none"
          borderBottomLeftRadius="none"
          // borderRadius="none"
          controls={leftControls}
        />

        <PhotoGrid
          src="/termii.png"
          borderTopLeftRadius="none"
          borderBottomLeftRadius="none"
          controls={leftControls}
        />
      </Grid>

      <Grid templateRows="2fr 1fr" rowGap={{ base: "2", md: "3" }} h="100%">
        <PhotoGrid src="/rigo_health.png" controls={leftControls} />
        <VideoGrid src="/pisearch.mp4" controls={leftControls} />
      </Grid>

      <Grid
        rowGap={{ base: "2", md: "3" }}
        gridTemplateRows="1fr 2fr 54px"
        h="full"
      >
        <PhotoGrid src="/knowble.png" controls={middleControls} />
        <PhotoGrid src="/sotel.png" controls={middleControls} />

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={middleControls}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <HStack
            bg="#000"
            borderRadius="xl"
            justifyContent={{ base: "center", md: "flex-end" }}
            px="3"
            py="1"
            onClick={handleClick}
            cursor="pointer"
          >
            <HStack alignItems="center" gap="16">
              <Image src="/arrow.gif" w="56px" alt="arrow" />

              <HStack display={{ base: "none", md: "flex" }}>
                <Image src="/star.svg" />
                <Text fontSize="xs" fontWeight="medium">
                  My AI
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </MotionBox>
      </Grid>

      <Grid rowGap={{ base: "2", md: "3" }} gridTemplateRows="2fr 1fr" h="full">
        <PhotoGrid
          src="/lyte.png"
          objectPosition="top"
          controls={rightControls}
        />
        <VideoGrid src="/getbaon.mp4" controls={rightControls} />
      </Grid>

      <Grid
        rowGap={{ base: "2", md: "3" }}
        gridTemplateRows="54px 1fr 2fr"
        h="full"
        display={{ base: "none", md: "grid" }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={rightControls}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <HStack
            bg="#000"
            borderRadius="xl"
            py="2"
            px="3"
            me="3"
            onClick={handleNavigate}
            cursor="pointer"
          >
            <HStack justifyContent="space-between" w="100%">
              <Image src="/animoji.png" />

              <Text fontSize="2xl" fontWeight="medium">
                Jesse David
              </Text>
              <Image src="/curved_arrow.svg" alt="arrow" />
            </HStack>
          </HStack>
        </MotionBox>

        <PhotoGrid
          src="/ideospace.png"
          borderTopRightRadius="none"
          borderBottomRightRadius="none"
          controls={rightControls}
        />

        <PhotoGrid
          src="/admission-link.png"
          objectPosition="top"
          borderTopRightRadius="none"
          borderBottomRightRadius="none"
          controls={rightControls}
        />
      </Grid>
    </Grid>
  );
};

export default MasonryGrid;
