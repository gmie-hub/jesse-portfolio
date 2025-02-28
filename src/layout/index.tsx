import {
  Box,
  Container,
  Flex,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import routes from "@jes/routes";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import MobileNav from "./mobileNav";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const location = useLocation();

  const isMyAIRoute =
    location.pathname === routes.main.myAI || location.pathname === routes.home;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container
      minW="100%"
      position="relative"
      p="0"
      background={
        isMyAIRoute
          ? // ? '#CAD9FF'
            "linear-gradient(to bottom right, #7647ED87 2%, #CAD9FF 20%);"
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
        templateColumns={isSmallScreen ? "1fr" : "54px 1fr"}
        position="relative"
        zIndex="1"
      >
        {!isSmallScreen && (
          <Box position="sticky">
            <Sidebar />
          </Box>
        )}

        <MobileNav
          isSidebarOpen={isSidebarOpen}
          isSmallScreen={isSmallScreen}
          toggleSidebar={toggleSidebar}
        />

        <Flex justifyContent="center" zIndex="2" overflow="auto" w="100%">
          <Outlet />
        </Flex>
      </Grid>
    </Container>
  );
};

export default Layout;
