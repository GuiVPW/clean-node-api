import fastify from 'fastify'
import express from 'fastify-express'

export const port = 3000 || process.env.PORT

export const app = fastify().register(express)
