import { Box, VStack, Icon, Text } from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";

interface Props {
  width?: string;
  aspectRatio?: number;
}

const NoImage = ({ width = "100%", aspectRatio = 3 / 2 }: Props) => {
  return (
    <Box
      width={width}
      aspectRatio={aspectRatio}
      bg="bg.muted"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack gap={1} color="fg.muted">
        <Icon boxSize={8} as={BsImage} />
        <Text fontSize="xs">No image available</Text>
      </VStack>
    </Box>
  );
};

export default NoImage;
