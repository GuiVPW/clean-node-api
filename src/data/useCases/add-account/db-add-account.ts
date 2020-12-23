import { AccountModel } from '../../../domain/models/account'
import { AddAccount, AddAccountModel } from '../../../domain/useCases/add-account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
	private readonly encrypter: Encrypter

	constructor({ encrypter }: { encrypter: Encrypter }) {
		this.encrypter = encrypter
	}

	async add(account: AddAccountModel): Promise<AccountModel | null> {
		await this.encrypter.encrypt({ value: account.password })
		return new Promise(resolve => resolve(null))
	}
}
