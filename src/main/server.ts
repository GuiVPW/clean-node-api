import { app, port } from './config/app'

app.listen(port, () =>
	console.log(`🚀 Servidor rodando na porta: ${port}
`)
)
