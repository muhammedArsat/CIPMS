

// export interface HTTPError extends Error {
//     statusCode:number,
//     message:string
// }

export class HTTPError extends Error{
    statusCode:number;

    constructor(message:string, statusCode:number){
        super(message);
        this.statusCode = statusCode
        this.name = "HTTPError"
        Error.captureStackTrace(this, this.constructor)
    }

}