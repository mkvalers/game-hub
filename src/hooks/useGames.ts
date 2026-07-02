import gameService, { Games } from '@/services/game-service';
import React, { useEffect, useState } from 'react';
import {CanceledError} from '../services/api-client';

const useGames = () => {
    const [games, setGames] = useState<Games>();
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const {request, cancel} = gameService.get<Games>();

        request
            .then(({data}) => {
                setGames(data);
                setLoading(false);
            })
            .catch(error => {
                if(error instanceof CanceledError) {
                    setError(error.message)
                    setLoading(false);
                }
            })
            .finally(() => {
                setLoading(false)
            })

        return () => {
            cancel();
        };
    },[]);
    
    return {games, error, isLoading, setGames, setError}
}

export default useGames 