import { DbAddAccount } from '../../data/useCases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/database/mongodb/account-repository/account'
import { SignUpController } from '../../presentations/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'

export const makeSignUpContrller = (): SignUpController => {
	const emailValidatorAdapter = new EmailValidatorAdapter()

	const salt = 12
	const bcryptAdapter = new BcryptAdapter({ salt })

	const accountMongoRepository = new AccountMongoRepository()

	const dbAddAccount = new DbAddAccount({
		encrypter: bcryptAdapter,
		addAccountRepository: accountMongoRepository
	})

	return new SignUpController({
		emailValidator: emailValidatorAdapter,
		addAccount: dbAddAccount
	})
}
