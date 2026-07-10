import { AxiosRequestConfig } from "axios";
import axios from "axios";
import { CanceledError } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export interface FetchResponse<T> {
    count: number;
    next: string;
    previous: string;
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

    getAll() {
        const controller = new AbortController();

        const request = axiosInstance.get<T[]>(this.endpoint, {
            signal: controller.signal
        });

        return {request, cancel: () => controller.abort}
    }

    get(requestConfig?: AxiosRequestConfig) {
        const controller = new AbortController();

        const request = axiosInstance.get<T>(this.endpoint, {
            signal: controller.signal,
            ...requestConfig
        });

        return {request, cancel: () => controller.abort}
    }

}

export {CanceledError, axiosInstance}

export default HttpService;