import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton1 = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Skeleton height="200px">
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </Skeleton>
    </Card.Root>
  );
};

export default GameCardSkeleton1;
