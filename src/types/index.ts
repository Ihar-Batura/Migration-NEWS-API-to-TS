// Объект ответа

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
