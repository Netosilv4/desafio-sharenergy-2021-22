import { UpdateError } from "../errors";
import { JwtPayload } from "../interfaces";
import { camelCaseToWords } from "../utils";

export const validateLogin = (username: string, password: string) => {
  switch (true) {
    case !username: return  'Usuario não informado' ;
    case !password: return 'Senha não informada' ;
    case username.length < 3: return  'Usuario precisa ter no mínimo 3 caracteres';
    case password.length < 3: return 'Senha precisa ter no mínimo 3 caracteres' ;
    default: return null;
  }
};

export const validateToken = (decoded: JwtPayload, username: string, type: string) => {
  switch (true) {
    case decoded.username !== username: return { message: 'Token não bate com usuario' };
    case decoded.type !== type: return { message: 'Token não bate com tipo' };
    default: return null;
  }
}

export const validateUpdate = (clientBody: any) => {
  for (let key in clientBody) {
    if (clientBody[key] === '') {
      throw new UpdateError(`${camelCaseToWords(key)} não pode ser vazio`)
    }
  }
}

    
export default validateLogin;
