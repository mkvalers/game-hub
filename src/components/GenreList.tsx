import useGenres from "@/hooks/useGenres";
import { Text, List } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id} unstyled>
            {genre.name}
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
