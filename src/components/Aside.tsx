import type { Genre } from "@/hooks/useGenres";
import GenreList from "./GenreList";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const Aside = ({ onSelectedGenre }: Props) => {
  return <GenreList onSelectedGenre={onSelectedGenre} />;
};

export default Aside;
