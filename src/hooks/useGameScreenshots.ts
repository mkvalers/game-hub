import { GameScreenshot } from "@/entites/GameScreenshot";
import HttpService from "@/services/http-service"
import { useQuery } from "@tanstack/react-query"
import ms from "ms";

const useGameScreenshots = (gameId: string) => {
    const httpService = new HttpService<GameScreenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: httpService.getAll,
    keepPreviousData: true,
    staleTime: ms("24h"),
  })
}

export default useGameScreenshots