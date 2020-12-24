import app, { port } from './config/app'

app.listen(port, () => {
	console.log(`🚀 Servidor rodando no endereço: ${port}`)
})
