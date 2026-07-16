import useGameScreenshots from "@/hooks/useGameScreenshots";
import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: string;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} gap={2}>
      {screenshots?.results.map((screenshot) => (
        <GridItem>
          <Image src={screenshot.image} alt="Game Screenshot" />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
