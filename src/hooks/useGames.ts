import gameService, { FetchGameResponse, Game } from '@/services/game-service';
import React, { useEffect, useState } from 'react';
import {CanceledError} from '../services/api-client';

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const {request, cancel} = gameService.get<FetchGameResponse>();

        request
            .then(({data}) => {
                setGames(data.results);
            })
            .catch(err => {
                if(err instanceof CanceledError) {
                    return;
                }

                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })

        return () => {
            cancel();
        };
    }, []);
    
    return {games, error, isLoading, setGames, setError}
}

export default useGames 