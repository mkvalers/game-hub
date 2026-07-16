import TruncatedText from "@/components/TruncatedText";
import useGame from "@/hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size={"lg"} />;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <TruncatedText text={game?.description_raw || ""} maxLength={300} />
      {/* <Text>{game?.description_raw}</Text> */}
      <Button variant="solid">
        <Link className="" to={"/"}>
          Back
        </Link>
      </Button>
    </>
  );
};

export default GameDetailPage;
