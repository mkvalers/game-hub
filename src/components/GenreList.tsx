import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import {
  Text,
  List,
  HStack,
  Image,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <>
      {error && null}
      <Heading fontSize={"2xl"}>Genres</Heading>
      <Button
        my={4}
        size="sm"
        width="100%"
        variant={selectedGenre == null ? "subtle" : "outline"}
        colorPalette="fg"
        onClick={() => onSelectedGenre(null)}
      >
        Reset
      </Button>

      {isLoading ? (
        skeleton.map((skeleton) => <GenreListSkeleton key={skeleton} />)
      ) : (
        <List.Root listStyleType="none">
          {data.map((genre) => (
            <List.Item key={genre.id} py={"5px"}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImage(genre.image_background)}
                />
                <Link
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectedGenre(genre)}
                  fontSize={"lg"}
                >
                  {genre.name}
                </Link>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;
