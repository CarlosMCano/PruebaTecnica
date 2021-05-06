import { libro } from "./libro";

export class autor{
    id : number;
    idBook : number
    firstName : string
    lastName : string

    libro : libro = new libro();
}