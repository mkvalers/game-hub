import HttpService from "@/services/http-service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";

const gameService = new HttpService<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => gameService.get(slug!),
    keepPreviousData: true,
    staleTime: ms("24h"),
  });
};

export default useGame;
