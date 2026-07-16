import { GameScreenshot } from "@/entites/GameScreenshot";
import HttpService from "@/services/http-service"
import { useQuery } from "@tanstack/react-query"

const useGameScreenshots = (gameId: string) => {
    const httpService = new HttpService<GameScreenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: httpService.getAll
  })
}

export default useGameScreenshots