import fastify from 'fastify'

const app = fastify()

const port = 3000 || process.env.PORT

app.listen(port, () =>
	console.log(`🚀 Servidor rodando na porta: ${port}
`)
)
