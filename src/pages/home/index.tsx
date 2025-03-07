import { Box, Container } from "@chakra-ui/react";
import MasonryGrid from "./masonryGrid";
import { useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import routes from "@jes/routes";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [clicked, setClicked] = useState(false);
  
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const middleControls = useAnimation();
  const navigate = useNavigate();

  const handleAnimation = useCallback(() => {
    leftControls.start({
      opacity: 1 - scrollProgress / 100,
      x: -scrollProgress,
      transition: { duration: 0.8, ease: "easeOut" },
    });

    rightControls.start({
      opacity: 1 - scrollProgress / 100,
      x: scrollProgress,
      transition: { duration: 0.8, ease: "easeOut" },
    });

    middleControls.start({
      opacity: 1 - scrollProgress / 100,
      y: scrollProgress,
      transition: { duration: 0.8, ease: "easeOut" },
    });

    if (scrollProgress >= 100) {
      setTimeout(() => {
        navigate(routes.main.myAI);
      }, 500);
    }
  }, [leftControls, rightControls, middleControls, navigate, scrollProgress]);

  useEffect(() => {
    leftControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 },
    });
    rightControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 },
    });
    middleControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 },
    });

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // User is scrolling down
        setScrollProgress((prev) => Math.min(prev + 10, 100));
      } else {
        // User is scrolling up 
        setScrollProgress((prev) => Math.max(prev - 10, 0));
      }

      handleAnimation();
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [
    handleAnimation,
    leftControls,
    rightControls,
    middleControls,
    navigate,
    scrollProgress,
  ]);

  useEffect(() => {
    if (clicked) {
      setScrollProgress(100);
      handleAnimation();
    }
  }, [clicked, handleAnimation]);

  const handleClick = () => {
    setClicked(true);
  };
  
  return (
    <Container
      h="100vh"
      minW="100%"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <Box background="#CAD9FF" flex="1" overflow="hidden">
        <MasonryGrid
          leftControls={leftControls}
          rightControls={rightControls}
          middleControls={middleControls}
          handleClick={handleClick}
        />
      </Box>
    </Container>
  );
};

export default Home;
