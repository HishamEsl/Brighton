import { IImage } from './image.model';

export interface IDive {
  id: number;
  imageId: number;
  description: string;
  image: IImage;
}
