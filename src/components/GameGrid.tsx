import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import CenteredInput from "./CenteredInput";
import { useNavigate } from "react-router-dom";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

  const navigate = useNavigate();

  return (
    <>
      {data?.pages[0].results.length === 0 && (
        <CenteredInput>
          <Text fontSize="2xl">No games found</Text>
        </CenteredInput>
      )}

      {error && <Text>{error.message}</Text>}

      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={() => fetchNextPage()}
        loader={
          <CenteredInput>
            <Spinner size="lg" />
          </CenteredInput>
        }
        hasMore={!!hasNextPage}
        endMessage={""}
      >
        <SimpleGrid gap={5} columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 5 }}>
          {data?.pages.flatMap((page) =>
            page.results.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onClick={() => navigate(`/games/${game.id}`)}
              />
            )),
          )}

          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
