import { Controller, HttpRequest } from '../../presentations/protocols'
import { Request, Response } from 'express'

export const adaptRoute = ({ controller }: { controller: Controller }) => {
	return async (req: Request, res: Response): Promise<Response<any>> => {
		const httpRequest: HttpRequest = {
			body: req.body
		}

		const httpResponse = await controller.handle(httpRequest)
		return res.status(httpResponse.statusCode).json(httpResponse.body)
	}
}
