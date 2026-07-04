import { Text, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "@/services/game-service";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
