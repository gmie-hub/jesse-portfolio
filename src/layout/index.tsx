import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import Sidebar from "@jes/components/sidebar";
import routes from "@jes/routes";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isMyAIRoute = location.pathname === routes.main.myAI;  

  return (
    <Container
      minW="100%"
      position="relative"
      overflow="hidden"
      p="0"
      background={isMyAIRoute ? "linear-gradient(to bottom right, #9747ff 2%, #3165A1 40%, #ffffff);" : 'none'}
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

      <Grid templateColumns="54px 1fr" position="relative" zIndex="1">
        <Box>
          <Sidebar />
        </Box>

        <Flex justifyContent="center">
          <Outlet />
        </Flex>
      </Grid>
    </Container>
  );
};

export default Layout;
