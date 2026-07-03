import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading, setGames, setError } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid gap={5} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} p="10px">
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
