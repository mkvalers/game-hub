import useGenres, { Genre } from "@/hooks/useGenres";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
}

const GenreSelector = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error } = useGenres();

  if (error) return null;

  return (
    <Box mb={5} display={{ base: "block", md: "block", lg: "none" }}>
      <Menu.Root
        onSelect={(details) => {
          if (details.value === "all") {
            onSelectGenre(null);
            return;
          }
          const genre = data?.find((g) => g.slug === details.value);
          if (genre) onSelectGenre(genre);
        }}
      >
        <Menu.Trigger asChild>
          <Button variant="subtle">
            {selectedGenre?.name || "Genres"} <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="all">Reset</Menu.Item>
              {data?.map((genre) => (
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
