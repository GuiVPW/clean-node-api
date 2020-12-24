import { Encrypter } from '../../protocols/encrypter'
import { DbAddAccount } from './db-add-account'

interface SutTypes {
	sut: DbAddAccount
	encrypterStub: Encrypter
}

const makeSut = (): SutTypes => {
	class EncrypterStub {
		async encrypt({ value }: { value: string }): Promise<string> {
			return new Promise(resolve => resolve('hashed_password'))
		}
	}

	const encrypterStub = new EncrypterStub()
	const sut = new DbAddAccount({ encrypter: encrypterStub })
	return {
		sut,
		encrypterStub
	}
}

describe('DbAddAccount Usecase', () => {
	test('Sould call Encrypter with correct password', async () => {
		const { sut, encrypterStub } = makeSut()
		const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

		const accountData = {
			name: 'valid_name',
			email: 'valid_email',
			password: 'valid_password'
		}
		await sut.add(accountData)
		expect(encryptSpy).toHaveBeenCalledWith({ value: 'valid_password' })
	})
})