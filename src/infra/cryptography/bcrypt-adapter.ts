import { Encrypter } from '../../data/protocols/encrypter'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Encrypter {
	private readonly salt: number

	constructor({ salt }: { salt: number }) {
		this.salt = salt
	}

	async encrypt({ value }: { value: string }): Promise<string> {
		await bcrypt.hash(value, this.salt)
		return ''
	}
}
