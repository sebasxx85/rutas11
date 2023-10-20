import { User } from "./user";

export interface Sesion {
    sesionActive: boolean,
    userActive?: User
}