import { Request, Response } from "express";
import { createTypeUsecase } from "./createTypeUseCase";



export class CreatTypeController {

  constructor(
    private createTypeUseCase: createTypeUsecase
  ) { }

  async handler(request: Request, response: Response): Promise<Response> {

    const { name } = request.body;

    try {
      await this.createTypeUseCase.execute({
        name
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).jsonp({
        message: err.message
      });
    }

  }
}