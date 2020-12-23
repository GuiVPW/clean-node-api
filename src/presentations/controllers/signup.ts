import { HttpRequest, HttpResponse, Controller, EmailValidator } from '../protocols'
import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helper'

export class SignUpController implements Controller {
	private readonly emailValidator: EmailValidator

	constructor({ emailValidator }: { emailValidator: EmailValidator }) {
		this.emailValidator = emailValidator
	}

	handle(httpRequest: HttpRequest): HttpResponse {
		try {
			const requiredFiels = ['name', 'email', 'password', 'passwordConfirmation']

			for (const field of requiredFiels) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const { email, password, passwordConfirmation } = httpRequest.body

			if (password !== passwordConfirmation) {
				return badRequest(new InvalidParamError('passwordConfirmation'))
			}

			const isEmailValid = this.emailValidator.isValid({ email })

			if (!isEmailValid) {
				return badRequest(new InvalidParamError('email'))
			}

			return {
				statusCode: 200,
				body: 'Success'
			}
		} catch (error) {
			return serverError()
		}
	}
}
