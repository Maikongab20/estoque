import { PrismaTypeRepositories } from './../../repositories/implementations/PrismaTypeRepositories';
import { CreatTypeController } from './createTypeController';
import { createTypeUsecase } from './createTypeUseCase';



const prismaTypeRepositories = new PrismaTypeRepositories();

const createTypeUseCsse = new createTypeUsecase(
  prismaTypeRepositories
);

const createTypeController = new CreatTypeController(
  createTypeUseCsse
);

export { createTypeUseCsse, createTypeController }