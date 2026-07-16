import { Card, Image, HStack, Flex, Heading } from "@chakra-ui/react";
import PlatformIconList from "@/components/platform/PlatformIconList";
import CriticScore from "@/components/shared/CriticScore";
import getCroppedImage from "@/services/image-url";
import NoImage from "@/components/shared/NoImage";
import { Game } from "@/entities/Game";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <Card.Root
      borderRadius={10}
      overflow="hidden"
      width="100%"
      cursor={"pointer"}
      transition="transform 0.2s ease"
      _hover={{ transform: "scale(1.03)" }}
      onClick={() => navigate(`/games/${game.slug}`)}
    >
      {game.background_image ? (
        <Image src={getCroppedImage(game.background_image)} width="100%" />
      ) : (
        <NoImage />
      )}
      <Card.Body as={Flex} direction="column" justifyContent="space-between">
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between" flexWrap="wrap" mt={2}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
