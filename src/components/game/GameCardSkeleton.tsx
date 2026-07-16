import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton1 = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="100%">
      <Skeleton height="200px" width="100%" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton1;
