import { IImage } from './image.model';

export interface IUser {
  id?: string;
  name: string;
  memebershipNumber?: number;
  firstName?: string;
  lastName?: string;
  imageId?: number;
  userName?: string;
  email: string;
  phoneNumber: string;
  address: string;
  nationality: string;
  image?: IImage;
}
