import { Platform } from "@/entites/Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Pushlisher";

export interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[]
}