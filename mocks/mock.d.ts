declare namespace mock {
    interface IMock {
        request: {
            path: string;
            method: "PUT" | "DELETE" | "HEAD" | "PATCH" | "JSONP" | "GET" | "POST",
            regex?: boolean,
            data?: {
                [key: string]: any;
            },
            params?: {
                [key: string]: any;
            },
            queryString?: {
                [key: string]: any;
            },
            headers?: {
                [key: string]: any;
            }
        },
        response: {
            data: any;
            status: number;
            delay?: number;
        }
    }
}
