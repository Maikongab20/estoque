import { Type } from "../../entities/Type";
import { prisma } from "../../prisma";
import { ITypeRepository } from "../ITypeRepository";

export class PrismaTypeRepositories implements ITypeRepository {

  async findByName(name: string): Promise<Type> {

    const typeAlredyExists = await prisma.type.findFirst({
      where: {
        name
      }
    });

    return typeAlredyExists;

  }

  async save(data: Type): Promise<void> {

    await prisma.type.create({ data });
  }


}