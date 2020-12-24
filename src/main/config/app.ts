import express from 'express'
import setupMiddlewares from './middlewares'

export const port = 3000 || process.env.PORT

const app = express()

setupMiddlewares(app)

export default app
