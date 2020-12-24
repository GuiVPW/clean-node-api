import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

export const port = 3000 || process.env.PORT

const app = express()

setupMiddlewares(app)
setupRoutes(app)

export default app
