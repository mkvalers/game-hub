import type { Genre } from "@/hooks/useGenres";
import GenreList from "./GenreList";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  selectedGenre?: Genre | null;
}

const Aside = ({ selectedGenre, onSelectedGenre }: Props) => {
  return (
    <GenreList
      selectedGenre={selectedGenre}
      onSelectedGenre={onSelectedGenre}
    />
  );
};

export default Aside;
