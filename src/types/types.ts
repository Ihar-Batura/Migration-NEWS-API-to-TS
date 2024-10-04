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

export interface IResponse {
    status: StatusResponse; //string
    sources: [];
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
