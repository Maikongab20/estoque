import { Type } from "../../entities/Type";
import { ITypeRepository } from "../../repositories/ITypeRepository"
import { ICreateTypeRequestDTO } from "./createTypeDTO"

export class createUserUsecase {

  constructor(
    private typeRepository: ITypeRepository
  ) { }


  async execute(data: ICreateTypeRequestDTO) {

    const typeAlredyExists = await this.typeRepository.findByName(data.name);

    if (typeAlredyExists) {
      throw new Error("type already exists.");
    }

    const type = new Type(data);

    await this.typeRepository.save(type);
  }
}