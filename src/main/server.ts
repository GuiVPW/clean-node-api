import { MongoHelper } from '../infra/database/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
	.then(async () => {
		const app = (await import('./config/app')).default
		app.listen(env.port, () => {
			console.log(`🚀 Servidor rodando no endereço: ${env.port}`)
		})
	})
	.catch(console.error)
