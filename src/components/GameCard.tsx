import { Card, Image, HStack, Flex } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "@/services/image-url";
import { Game } from "@/hooks/useGames";
import NoImage from "./NoImage";
import TruncatedText from "./TruncatedText";

interface Props {
  game: Game;
  onClick: () => void;
}

const GameCard = ({ game, onClick }: Props) => {
  return (
    <Card.Root
      borderRadius={10}
      overflow="hidden"
      width="100%"
      onClick={onClick}
    >
      {game.background_image ? (
        <Image src={getCroppedImage(game.background_image)} width="100%" />
      ) : (
        <NoImage />
      )}
      <Card.Body as={Flex} direction="column" justifyContent="space-between">
        {/* <Heading fontSize="2xl">{game.name}</Heading> */}
        <TruncatedText text={game.name} maxLength={40} />
        <HStack justifyContent="space-between" flexWrap="wrap">
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
