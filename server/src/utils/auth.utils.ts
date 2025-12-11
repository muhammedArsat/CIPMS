import jwt from 'jsonwebtoken'
import { REFRESH_TOKEN_SECRET_KEY } from '../configs/env'
import { HTTPError } from '../types/types'
interface payload  {
    email:string,
    role:string,
    name:string

}

//function to generate refresh token(jwt)
export const generateRefreshToken = (payload:payload)=>{
    if(!REFRESH_TOKEN_SECRET_KEY){
        throw new HTTPError("Refresh token secret key isn't defined",500)
    }
    return jwt.sign(payload,REFRESH_TOKEN_SECRET_KEY,{expiresIn:"7d"})
}