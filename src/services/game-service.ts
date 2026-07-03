import create from "./http-service";

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
}

export interface FetchGameResponse {
    count: number;
    results: Game[];
}

export default create('/games');