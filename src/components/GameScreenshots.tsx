import useGameScreenshots from "@/hooks/useGameScreenshots";
import { GridItem, Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: string;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} gap={2}>
      {screenshots?.results.map((screenshot) => (
        <GridItem>
          <Image
            key={screenshot.id}
            src={screenshot.image}
            alt="Game Screenshot"
            objectFit={"cover"}
            width="100%"
            height="auto"
          />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
