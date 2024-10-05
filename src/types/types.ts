export interface INew {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

enum StatusResponse {
    Ok = 'ok',
    Error = 'error',
}

export interface INewsResponse {
    articles: INew[];
    status: StatusResponse;
    totalResults: number;
}

export interface ISource {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface ISourceResponse {
    sources: ISource[];
    status: StatusResponse;
}

export type Options = {
    [key: string]: string;
};
