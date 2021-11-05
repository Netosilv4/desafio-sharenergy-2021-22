import { NotFound, AuthError } from "../errors";
import { findUser } from "../models";
import bcrypt from "bcrypt";
import { generateToken } from "../jwt";
import { UserInterface } from "../schema/userSchema";

export const loginHandler = async (username: string, password: string):Promise<UserInterface> => {
    const user = await findUser(username);
    
    if (!user) throw new NotFound("Usuario não encontrado");

    const isValid = await bcrypt.compare(password, user.senha);
    
    if (!isValid) throw new AuthError("Senha inválida");

    const token = generateToken(user.usuario, user.tipo);

    user.token = token;

    return user;
}