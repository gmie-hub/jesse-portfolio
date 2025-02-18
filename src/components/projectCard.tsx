import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const ProjectCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box bg="rgba(0, 0, 0, 0.70)" borderRadius="md" p="4">
      {children}
    </Box>
  );
};

export default ProjectCard;