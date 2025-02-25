import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ComponentProps {
  emailType: string;
  email: string;
}

const EmailCard: FC<ComponentProps> = ({ email, emailType }) => {
  return (
    <HStack
      me="3"
      gap="5"
      w="100%"
      justifyContent={{ base: "space-between", md: "initial" }}
    >
      <Box textAlign="start" w="55%">
        <Text fontSize={{ base: "xs", md: "11px" }} fontWeight="bold">
          {emailType}
        </Text>
        <Text
          fontSize="xs"
          fontWeight="medium"
          wordBreak="break-word"
          color="rgba(255, 255, 255, 0.95)"
        >
          {email}
        </Text>
      </Box>

      <Center p="3" bg="rgba(255, 255, 255, 0.10)" borderRadius="50%">
        <Image src="/email-icon.svg" alt="email" />
      </Center>
    </HStack>
  );
};

export default EmailCard;
