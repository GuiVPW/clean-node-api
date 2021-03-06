import {
	HttpRequest,
	HttpResponse,
	Controller,
	EmailValidator,
	AddAccount
} from './signup-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, ok, serverError } from '../../helpers/http-helper'

export class SignUpController implements Controller {
	private readonly emailValidator: EmailValidator
	private readonly addAccount: AddAccount

	constructor({
		emailValidator,
		addAccount
	}: {
		emailValidator: EmailValidator
		addAccount: AddAccount
	}) {
		this.emailValidator = emailValidator
		this.addAccount = addAccount
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFiels = ['name', 'email', 'password', 'passwordConfirmation']

			for (const field of requiredFiels) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const { name, email, password, passwordConfirmation } = httpRequest.body

			if (password !== passwordConfirmation) {
				return badRequest(new InvalidParamError('passwordConfirmation'))
			}

			const isEmailValid = this.emailValidator.isValid({ email })

			if (!isEmailValid) {
				return badRequest(new InvalidParamError('email'))
			}

			const account = await this.addAccount.add({
				name,
				email,
				password
			})

			return ok({ data: account })
		} catch (error) {
			console.log(error)
			return serverError()
		}
	}
}
