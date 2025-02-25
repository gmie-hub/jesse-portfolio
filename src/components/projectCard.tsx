import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

interface ComponentProps extends PropsWithChildren {
  bg?: string;
  h?: string;
}

const ProjectCard: FC<ComponentProps> = ({ children, h, bg="rgba(0, 0, 0, 0.70)" }) => {
  return (
    <Box bgColor={bg} borderRadius="lg" p="4" h={h} zIndex="2">
      {children}
    </Box>
  );
};

export default ProjectCard;