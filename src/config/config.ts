import { config } from 'dotenv'

config()

export const DB_NAME = process.env.DB_NAME || 'test'
export const DB_HOST = process.env.DB_HOST || 'test'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'test'
export const DB_USER = process.env.DB_USER || 'test'
