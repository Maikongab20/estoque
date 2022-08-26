import { Type } from '../entities/Type'

export interface ITypeRepository {
  findByName(name: string): Promise<Type>;
  save(Type: Type): Promise<void>;
}