import create from "@/services/http-service";
import { useEffect, useState } from "react";

// Ctrl + T - to search anything within the code base.

interface FetchResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

const useData = <T>(endpoint : string) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);

        const { request, cancel } = create(endpoint).get<FetchResponse<T>>();

        request
            .then(({data}) => {
                setData(data.results);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            })
        
        return () => {
            cancel();
        };
    }, []);

  return {data, isLoading, error};
}

export default useData