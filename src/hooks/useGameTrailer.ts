import { GameTrailer } from "@/entites/GameTrailer"
import HttpService from "@/services/http-service"
import { useQuery } from "@tanstack/react-query"
import ms from "ms"

const useGameTrailer = (gameId: number) => {

    const httpService = new HttpService<GameTrailer>(`/games/${gameId}/movies`)

    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: httpService.getAll,
        keepPreviousData: true,
        staleTime: ms("24h"),
    })
}

export default useGameTrailer