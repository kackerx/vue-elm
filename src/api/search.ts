import axios                      from "./base";
import type { ISearchResultList } from "@/types";

export const fetchSearchData = (keyword: string = '') => {
    return axios.get<ISearchResultList, ISearchResultList>('home_search', {
        params: { keyword }
    })
}