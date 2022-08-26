import { v4 as uuid } from 'uuid';

export class Type {

  public readonly id: string;
  public name: string;

  constructor(props: Omit<Type, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

}