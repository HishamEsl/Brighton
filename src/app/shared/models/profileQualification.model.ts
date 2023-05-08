import { IImage } from './image.model';

export interface IQualifications {
  id: number;
  name: string;
  padiNumber: number;
  certificateDate: string;
  userId: string;
  instructorName: string;
  location: string;
  imageId?: number;
  description: string;
  image?: IImage;
}
