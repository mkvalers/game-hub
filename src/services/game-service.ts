import create from "./http-service";

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
}

export interface Games {
    count: number;
    results: Game[];
}

export default create('/games');