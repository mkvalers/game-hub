import useGames from "@/hooks/useGames";
import { Box, Center, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/layouts/MainLayout";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import CenteredInput from "./CenteredText";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

  return (
    <>
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
        endMessage={<CenteredInput>You reached the end.</CenteredInput>}
      >
        <SimpleGrid gap={5} columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 5 }}>
          {data?.pages.flatMap((page) =>
            page.results.map((game) => <GameCard key={game.id} game={game} />),
          )}

          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
