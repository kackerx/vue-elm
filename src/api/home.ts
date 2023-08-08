import axios              from "./base";
import type { IHomeInfo } from "@/types";

export const fetchHomeData = (keyword: string = '') => {
    return axios.get<IHomeInfo, IHomeInfo>('home_page')
}