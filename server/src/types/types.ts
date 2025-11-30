
// class creation for Modified error to show we details about the error with 
// message and statusCode and success in the response
export class HTTPError extends Error{
    statusCode:number;

    constructor(message:string, statusCode:number){
        super(message);
        this.statusCode = statusCode
        this.name = "HTTPError"
        Error.captureStackTrace(this, this.constructor)
    }

}