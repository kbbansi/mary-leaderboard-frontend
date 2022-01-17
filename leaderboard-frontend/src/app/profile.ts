import { Language } from './language';
export class Profile {
  username: string;
  name: string;
  clan: string;
  honour: number;
  // languages: Language[] = {
  //   name: string;
  //   rank: number;
  // },
  languages: Language[];

  overall_rank: number;
}
