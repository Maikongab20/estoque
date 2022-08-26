import { Request, Response } from "express";
import { createUserUsecase } from "./createTypeUseCase";



export class CreateuserController {

  constructor(
    private createuseruseCase: createUserUsecase
  ) { }

  async handler(request: Request, response: Response): Promise<Response> {

    const { name } = request.body;

    try {
      await this.createuseruseCase.execute({
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