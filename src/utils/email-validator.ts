import { EmailValidator } from '../presentations/protocols/email-validator'

export class EmailValidatorAdapter implements EmailValidator {
	isValid({ email }: { email: string }): boolean {
		return false
	}
}
