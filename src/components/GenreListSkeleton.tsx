import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack py="5px" w="100%" gap={5} alignItems="center">
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText noOfLines={1} height="23px" width="120px" />
    </HStack>
  );
};

export default GenreListSkeleton;
