import { IImage } from './image.model';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  imageId: number;
  userName: string;
  email: string;
  phoneNumber: string;
  image: IImage;
}
