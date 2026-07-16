import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CenteredInput = ({ children }: Props) => {
  return (
    <Flex justifyContent="center" alignItems="center" my={10}>
      {children}
    </Flex>
  );
};

export default CenteredInput;
