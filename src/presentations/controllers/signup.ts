import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
	handle(httpRequest: HttpRequest): HttpResponse {
		const requiredFiels = ['name', 'email', 'password', 'passwordConfirmation']

		for (const field of requiredFiels) {
			if (!httpRequest.body[field]) {
				return badRequest(new MissingParamError(field))
			}
		}

		return {
			statusCode: 200,
			body: 'Success'
		}
	}
}
