import { Box, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import routes from "@jes/routes";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import MobileNav from "./mobileNav";
import { motion } from "framer-motion";
import ProjectDrawerContent from "./projectDrawerContent";

const MotionBox = motion(Box);

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const location = useLocation();

  const isMyAIRoute =
    location.pathname === routes.main.myAI || location.pathname === routes.home;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Box
      position="relative"
      p="0"
      overflow="auto"
      background={
        isMyAIRoute
          ? "linear-gradient(to bottom right, #7647ED87 2%, #CAD9FF 20%);"
          : "none"
      }
    >
      {!isMyAIRoute && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        >
          <source src="/jesse-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <Grid
        templateColumns={
          isSmallScreen
            ? "1fr"
            : isProjectOpen
            ? "54px calc(100% - 3.8%)"
            : "54px 1fr"
        }
        position="relative"
        zIndex="1"
        transition="all 0.4s ease-in-out"
      >
        {!isSmallScreen && (
          <Box position="sticky">
            <Sidebar setIsProjectOpen={setIsProjectOpen} />
          </Box>
        )}

        {isProjectOpen && <ProjectDrawerContent />}

        {isSmallScreen && (
          <MobileNav
            isSidebarOpen={isSidebarOpen}
            isSmallScreen={isSmallScreen}
            toggleSidebar={toggleSidebar}
          />
        )}

        <MotionBox
          as={Flex}
          justifyContent="center"
          zIndex="2"
          overflow={isProjectOpen ? "hidden" : "auto"}
          h="100%"
          animate={{ marginLeft: isProjectOpen ? "355px" : "0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Outlet />
        </MotionBox>
      </Grid>
    </Box>
  );
};

export default Layout;