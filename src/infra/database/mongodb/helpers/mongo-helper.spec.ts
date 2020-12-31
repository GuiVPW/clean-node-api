import env from '../../../../main/config/env'
import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
	beforeAll(async () => {
		return await sut.connect(env.mongoUrl)
	})

	afterAll(async () => {
		return await sut.disconnect()
	})

	test('Should reconnect if mongodb is down', async () => {
		let accountCollection = await sut.getCollection({ name: 'accounts' })
		expect(accountCollection).toBeTruthy()
		await sut.disconnect()
		accountCollection = await sut.getCollection({ name: 'accounts' })
		await sut.disconnect()
	})
})
