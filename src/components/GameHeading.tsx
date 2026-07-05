import { GameQuery } from "@/layouts/MainLayout";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading
      as="h1"
      my={{ base: 2, lg: 5 }}
      fontSize={{ base: "3xl", lg: "6xl" }}
      lineHeight={1}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
