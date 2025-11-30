import dotenv from "dotenv"

dotenv.config({quiet:true})

export const PORT = process.env.PORT
export const DATABASE_URL = process.env.DATABASE_URL
export const REFRESH_TOKEN_SECRET_KEY =process.env.REFRESH_TOKEN_SECRET_KEY
export const NODE = process.env.NODE