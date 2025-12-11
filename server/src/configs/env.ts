import dotenv from "dotenv"

dotenv.config({quiet:true})

export const PORT = process.env.PORT
export const CLIENT_URL = process.env.CLIENT_URL
export const DATABASE_URL = process.env.DATABASE_URL
export const REFRESH_TOKEN_SECRET_KEY =process.env.JWT_SECRET_KEY
export const NODE = process.env.NODE
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
export const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CLIENT_CALLBACK_URL