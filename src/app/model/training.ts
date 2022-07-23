import { Category } from "./category.model";

export class Training{
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  difficulty!: number;
  active!: boolean;
  photoName!: string;
  category!: Category;
  quantity!:number | undefined;

}
