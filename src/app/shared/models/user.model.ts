import { IImage } from './image.model';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  image: IImage;
}
