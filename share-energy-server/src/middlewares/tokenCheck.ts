import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '../interfaces';
import { validateToken } from '../validations';

export const tokenCheck = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const { username, type } = req.query
    if (!authorization) {
        return res.status(401).send({message: 'Token não enviado'});
    }

    const token = authorization.split(' ')[1];

    console.log(token)

    jwt.verify(token, '123321', (err, decoded) => {
        if (err) {
        return res.status(500).send('Token inválido');
        }
        const validate = validateToken(decoded as JwtPayload, username as string, type as string);

        if (validate) return res.status(401).send({message: validate.message});
        
        next();
    });
}
