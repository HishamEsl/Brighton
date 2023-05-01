import { IUser } from './user.model';

export interface ITeam {
  id: number;
  userName: string;
  position: string;
  jobDescription: string;
  user: IUser;
}
