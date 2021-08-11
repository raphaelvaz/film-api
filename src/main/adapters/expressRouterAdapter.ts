import { Controller } from "../../presentation/protocols/controller";
import { Request, Response } from 'express'


export const ExpressAdapter = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params
        }
        const httpResponse = await controller.handle(httpRequest)
        if (httpResponse.statusCode === 200) {
            res.status(httpResponse.statusCode).json(httpResponse.body)
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            })
        }
    }

}