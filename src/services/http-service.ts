import { AxiosRequestConfig } from "axios";
import axios from "axios";
import { CanceledError } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL: API_BASE_URL,
    params: {
        key: API_KEY
    }
})

class HttpService <T> {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (requestConfig?: AxiosRequestConfig) => {
        return axiosInstance
                .get<FetchResponse<T>>(this.endpoint, requestConfig)
                .then(res => res.data)
    }

}

export default HttpService;