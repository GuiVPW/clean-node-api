import request from 'supertest'
import { MongoHelper } from '../../infra/database/mongodb/helpers/mongo-helper'
import app from '../config/app'
import env from '../config/env'

describe('SignUp Routes', () => {
	beforeAll(async () => {
		await MongoHelper.connect(env.mongoUrl)
	})

	afterAll(async () => await MongoHelper.disconnect())

	beforeEach(async () => {
		const accountCollection = await MongoHelper.getCollection({ name: 'accounts' })
		await accountCollection.deleteMany({})
	})

	test('Should return an account on success', async () => {
		await request(app)
			.post('/api/signup')
			.send({
				name: 'Guilherme',
				email: 'guivpw68@gmail.com',
				password: '123',
				passwordConfirmation: '123'
			})
			.expect(200)
	})
})
