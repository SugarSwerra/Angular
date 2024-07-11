import {Course} from "./Course";

export class UserDTO {
  id: string;
  nome: string;
  cognome: string;
  email: string;
  password: string;
  corsi: Course[];
}
