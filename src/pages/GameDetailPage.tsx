import CriticScore from "@/components/CriticScore";
import DefinitionItem from "@/components/DefinitionItem";
import GameAttributes from "@/components/GameAttributes";
import TruncatedText from "@/components/TruncatedText";
import useGame from "@/hooks/useGame";
import { Button, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size={"lg"} />;

  return (
    <>
      <Button variant="solid">
        <Link className="" to={"/"}>
          Back
        </Link>
      </Button>
      <Heading>{game?.name}</Heading>
      <TruncatedText text={game?.description_raw!} maxLength={300} />
      <GameAttributes game={game!} />
    </>
  );
};

export default GameDetailPage;
