import {
	AddAccount,
	AddAccountModel,
	AccountModel,
	Encrypter,
	AddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
	private readonly encrypter: Encrypter
	private readonly addAccountRepository: AddAccountRepository

	constructor({
		encrypter,
		addAccountRepository
	}: {
		encrypter: Encrypter
		addAccountRepository: AddAccountRepository
	}) {
		this.encrypter = encrypter
		this.addAccountRepository = addAccountRepository
	}

	async add(accountData: AddAccountModel): Promise<AccountModel> {
		const hashedPassword = await this.encrypter.encrypt({ value: accountData.password })
		const account = await this.addAccountRepository.add(
			Object.assign({}, accountData, { password: hashedPassword })
		)
		return account
	}
}
