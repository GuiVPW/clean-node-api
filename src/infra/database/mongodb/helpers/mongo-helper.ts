import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
	client: (null as unknown) as MongoClient,
	uri: (null as unknown) as string,

	async connect(uri: string): Promise<void> {
		this.uri = uri
		this.client = await MongoClient.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
	},

	async disconnect(): Promise<void> {
		await this.client.close()
		// @ts-ignore
		this.client = null
	},

	async getCollection({ name }: { name: string }): Promise<Collection> {
		if (!this.client?.isConnected()) {
			await this.connect(this.uri)
		}
		return this.client.db().collection(name)
	},

	map({ collection }: { collection: any }): any {
		const { _id, ...collectionWithoutId } = collection
		return Object.assign({}, collectionWithoutId, { id: _id })
	}
}
