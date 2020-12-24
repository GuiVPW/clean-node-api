import dotenv from 'dotenv-safe'

dotenv.config()

export default {
	mongoUrl:
		process.env.NODE_ENV === 'production'
			? (process.env.MONGO_URL_PRODUCTION as string)
			: 'mongodb://admin:admin@127.0.0.1:27017/',
	port: 3000 || process.env.PORT
}
