import useGameQueryStore from "@/stores/useGameQueryStore";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const platformName = useGameQueryStore((s) => s.gameQuery.platform?.name);
  const genreName = useGameQueryStore((s) => s.gameQuery.genre?.name);

  const heading = `${platformName || ""} ${genreName || ""} Games`;

  return (
    <Heading
      as="h1"
      my={{ base: 2, lg: 5 }}
      fontSize={{ base: "3xl", sm: "3xl", lg: "6xl" }}
      lineHeight={1.2}
      mb={{ base: 2, sm: 2 }}
      px={2}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
