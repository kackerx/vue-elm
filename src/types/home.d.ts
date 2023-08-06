export interface ISearchRecomment {
    value: number
    label: string
}

export interface ISearchResultList {
    list: ISearchResItem
}

export interface ISearchResItem {
    type: number,
    label: string,
    resCount: number
}

export interface IHomeInfo {
    banner: IBanner
    searchRecomment: ISearchRecomment[]
    transformer: ITransformer[]
    countdown: ICountDown
    activities: string[]
}

export interface IBanner {
    imgUrl: string
}

export interface ITransformer {
    imgUrl: string
    label: string
}

export interface ICountDown {
    time: number
    goods: IGood
}


