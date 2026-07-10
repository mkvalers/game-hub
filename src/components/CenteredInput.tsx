import { Flex, Spinner, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CenteredInput = ({ children }: Props) => {
  return (
    <Flex justifyContent="center" alignItems="center" py={4}>
      {children}
    </Flex>
  );
};

export default CenteredInput;
