import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import TruncatedText from "@/components/TruncatedText";
import useGame from "@/hooks/useGame";
import { Flex, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: game, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"}>
        <Spinner size={"xl"} />
      </Flex>
    );

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={5}
        mt={10}
        p={{ base: 2, md: 0 }}
      >
        <GridItem>
          <Heading fontSize={"4xl"} mb={4} lineHeight={1.1}>
            {game?.name}
          </Heading>
          <TruncatedText text={game?.description_raw!} maxLength={400} />
          <GameAttributes game={game!} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game?.id!} />
          <GameScreenshots gameId={game?.slug!} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
