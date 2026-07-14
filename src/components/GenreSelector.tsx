import useGameQueryStore from "@/stores/useGameQueryStore";
import useGenres from "@/hooks/useGenres";
import { Genre } from "@/entites/Genre";
import { Text, Box, Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const GenreSelector = () => {
  const { data, error } = useGenres();

  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);
  const setSelectedGenre = useGameQueryStore((s) => s.setGenre);

  if (error) return null;

  return (
    <Box display={{ base: "block", md: "block", lg: "none" }}>
      <Menu.Root
        onSelect={(details) => {
          if (details.value === "all") {
            setSelectedGenre(null);
            return;
          }
          const genre = data?.results.find((g) => g.slug === details.value);
          if (genre) setSelectedGenre(genre);
        }}
      >
        <Menu.Trigger asChild>
          <Button variant="subtle" width="100%">
            <Text overflow="hidden" textOverflow="ellipsis">
              {selectedGenre?.name || "Genres"}
            </Text>
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="all">Reset</Menu.Item>
              {data?.results.map((genre) => (
                <Menu.Item key={genre.id} value={genre.slug}>
                  {genre.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default GenreSelector;
