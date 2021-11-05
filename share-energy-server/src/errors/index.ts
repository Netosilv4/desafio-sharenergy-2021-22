export enum HttpStatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
    UNAUTHORIZED = 401,
}


export class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: number;
    public readonly isOperational: boolean;
    
    constructor(description: string, httpCode: number, name: string, isOperational: boolean) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
    
      this.name = name;
      this.httpCode = httpCode;
      this.isOperational = isOperational;
    
      Error.captureStackTrace(this);
    }
}
   
export class AuthError extends BaseError {
    constructor(description: string = 'Senha inválida', httpCode = HttpStatusCode.UNAUTHORIZED, isOperational = true, name = "Authentication Error") {
      super(description, httpCode, description, isOperational);
    }
}

export class NotFound extends BaseError {
  constructor(name: string = "Object not Found", httpCode = HttpStatusCode.NOT_FOUND, isOperational = true, description = 'Objeto não encontrado') {
    super(name, httpCode, description, isOperational);
  }
}

export class UpdateError extends BaseError {
  constructor(description: string = 'Impossivel atualizar', httpCode = HttpStatusCode.UNAUTHORIZED, isOperational = true, name = "Update Error") {
    super(description, httpCode, description, isOperational);
  }
}
