import { GameTrailer } from "@/entites/GameTrailer"
import HttpService from "@/services/http-service"
import { useQuery } from "@tanstack/react-query"

const useGameTrailer = (gameId: number) => {

    const httpService = new HttpService<GameTrailer>(`/games/${gameId}/movies`)

    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: httpService.getAll
    })
}

export default useGameTrailer