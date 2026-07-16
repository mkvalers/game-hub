import useGameTrailer from "@/hooks/useGameTrailer";
import { result } from "lodash";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, isLoading, error } = useGameTrailer(gameId);

  const first = trailer?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  return first ? (
    <video
      src={first?.data[480]}
      controls
      poster={first.preview}
      width="100%"
      height="auto"
    />
  ) : null;
};

export default GameTrailer;
